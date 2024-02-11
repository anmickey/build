const { User } = require('../models/mapping');
const bcrypt = require('bcrypt');
const APIError = require('../errors/AppError');

class UserCheckControllers {
  async registration(req, res, next) {
    try {
      const { email, password, number, login } = req.body;
      if (!email || !password) {
        next(APIError.badRequest('Incorrect email or password'));
      }
      const userEmail = await User.findOne({ where: { email } });
      if (userEmail) {
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
      return res.json({ user: req.body, message: 'Ok' });
    } catch (e) {
      next(e);
    }
  }

  async loginCheck(req, res, next) {
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

      return res.json({ message: 'Ok', user: user });
    } catch (e) {
      next(e);
    }
  }

  async validcode(req, res, next) {
    try {
      return res.json(Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserCheckControllers();
