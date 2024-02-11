const { User, Basket, Favorite } = require('../models/mapping');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('config');
const APIError = require('../errors/AppError');
const maxAge = 60 * 60 * 1000 * 24 * 365; // один год

const generateJwt = (id, email, role, login) => {
  return jwt.sign({ id, email, role, login }, config.get('secretKey'), {
    expiresIn: '24h',
  });
};

class UserControllers {
  async registration(req, res, next) {
    try {
      const { email, password, number, login, role, firstName, lastName } = req.body;
      if (!email || !password) {
        next(APIError.badRequest('Email not specified'));
      }
      const candidata = await User.findOne({ where: { email } });
      if (candidata) {
        next(APIError.badRequest('This email already exists'));
      }
      const userNumber = await User.findOne({ where: { number } });
      if (userNumber) {
        next(APIError.badRequest('This number already exists'));
      }
      const userLogin = await User.findOne({ where: { login } });
      if (userLogin) {
        next(APIError.badRequest('This login already exists'));
      }

      const hashPass = await bcrypt.hash(password, 5);
      const user = await User.create({
        password: hashPass,
        email,
        role,
        number,
        login,
        firstName,
        lastName,
      });
      await Basket.create({
        userId: user.id,
      });
      await Favorite.create({
        userId: user.id,
      });
      const token = generateJwt(user.id, user.email, user.role, user.login);
      res.cookie('userId', user.id, {
        maxAge,
        signed: true,
        sameSite: 'Strict',
        secure: true,
        httpOnly: true,
      });
      res.json({ message: 'Ok', token, user });
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      let user = await User.findOne({ where: { email } });
      const login = await User.findOne({
        where: { login: email },
      });

      if (!user && !login) {
        next(APIError.badRequest('login or email not found'));
      } else if (login) {
        user = login;
      }
      const comparePass = bcrypt.compareSync(password, user.password);
      if (!comparePass) {
        next(APIError.badRequest('Invalid password'));
      }
      const token = generateJwt(user.id, user.email, user.role, user.login);
      res.cookie('userId', user.id, {
        maxAge,
        signed: true,
        sameSite: 'Strict',
        secure: true,
        httpOnly: true,
      });
      res.json({ message: 'Ok', token, user });
    } catch (e) {
      next(e);
    }
  }

  async delete(req, _, next) {
    try {
      const user = await User.findByPk(req.user.id);
      if (!user) {
        throw new Error('User is not found');
      }
      await user.destroy({ truncate: true, cascade: false });
      return user;
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const user = await User.findAll();
      res.json(user);
    } catch (e) {
      next(e);
    }
  }

  async update(req, res, next) {
    try {
      if (req.signedCookies.userId) {
        for (const [key, value] of Object.entries(req.body)) {
          if (key) {
            await User.update(
              {
                [key]: value,
              },
              {
                where: { id: req.signedCookies.userId },
              },
            );
          }
        }
        const user = await User.findOne({
          where: { id: req.signedCookies.userId },
        });

        res.cookie('userId', user.id, {
          maxAge,
          signed: true,
          sameSite: 'Strict',
          secure: true,
          httpOnly: true,
        });
        res.json({ message: 'Ok', user });
      } else {
        next(APIError.badRequest('not found cookies'));
      }
    } catch (e) {
      next(e);
    }
  }

  async updatepass(req, res, next) {
    try {
      const { passwordold, password } = req.body;
      const cookie = req.signedCookies.userId;
      if (passwordold && password && cookie) {
        let user = await User.findOne({
          where: { id: cookie },
        });

        const comparePass = bcrypt.compareSync(passwordold, user.password);

        if (comparePass) {
          const hashPass = await bcrypt.hash(password, 5);
          await User.update(
            {
              password: hashPass,
            },
            {
              where: { id: cookie },
            },
          );
          user.save();
        } else {
          return next(APIError.badRequest('Invalid password'));
        }

        user = await User.findOne({
          where: { id: req.signedCookies.userId },
        });

        const token = generateJwt(user.id, user.email, user.role, user.login);
        res.cookie('userId', user.id, {
          maxAge,
          signed: true,
          sameSite: 'Strict',
          secure: true,
          httpOnly: true,
        });
        res.json({ message: 'Ok', token, user });
      } else {
        return next(APIError.badRequest('not found cookies or password'));
      }
    } catch (e) {
      next(e);
    }
  }

  async check(req, res, next) {
    try {
      const token = generateJwt(req.user.id, req.user.email, req.user.role, req.user.login);
      const user = await User.findOne({ where: { login: req.user.login } });
      const basket = await Basket.findOne({
        where: { userId: user.id },
      });
      const favorite = await Favorite.findOne({
        where: { userId: user.id },
      });
      if (user) {
        res.cookie('userId', user.id, {
          maxAge,
          signed: true,
          sameSite: 'Strict',
          secure: true,
          httpOnly: true,
        });
        res.cookie('favoriteId', favorite.id, {
          maxAge,
          signed: true,
          sameSite: 'Strict',
          secure: true,
          httpOnly: true,
        });
        res.cookie('basketId', basket.id, {
          maxAge,
          signed: true,
          sameSite: 'Strict',
          secure: true,
          httpOnly: true,
        });
        res.json({ token, user, message: 'Ok' });
      } else {
        return res.status(405).json({ message: 'Не авторизован' });
      }
    } catch (error) {
      next(error);
    }
  }

  async deletecookie(req, res) {
    if (req.signedCookies.userId) {
      res.cookie('userId', req.signedCookies.userId, {
        signed: true,
        sameSite: 'Strict',
        maxAge: 0,
        httpOnly: true,
      });
      res.cookie('basketId', req.signedCookies.basketId, {
        signed: true,
        sameSite: 'Strict',
        maxAge: 0,
        httpOnly: true,
      });
      res.cookie('favoriteId', req.signedCookies.favoriteId, {
        signed: true,
        sameSite: 'Strict',
        maxAge: 0,
        httpOnly: true,
      });
    }
    res.send('Cookie has been deleted successfully');
  }
}

module.exports = new UserControllers();
