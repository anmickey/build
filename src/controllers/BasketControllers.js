const BasketModel = require('../models/Basket.js');
const APIError = require('../errors/AppError.js');

const maxAge = 60 * 60 * 1000 * 24 * 365; // один год
const signed = true;
const secure = true;

class BasketControllers {
  async getOne(req, res, next) {
    try {
      let basket;
      if (req.signedCookies.userId) {
        basket = await BasketModel.getOne(parseInt(req.signedCookies.userId));
      } else {
        return next(APIError.badRequest('not found cookies'));
      }

      res.cookie('basketId', basket.id, {
        maxAge,
        signed,
        sameSite: 'Strict',
        secure,
        httpOnly: true,
      });
      res.json(basket);
    } catch (e) {
      next(next(e));
    }
  }
  // !==================================================================================================
  async append(req, res, next) {
    try {
      let userId;
      if (req.signedCookies.userId) {
        userId = parseInt(req.signedCookies.userId);
      } else {
        return next(APIError.badRequest('not found cookies'));
      }
      const { productId, quantity } = req.params;
      const basket = await BasketModel.append(userId, productId, quantity);
      res.cookie('basketId', basket.id, {
        maxAge,
        signed,
        sameSite: 'Strict',
        secure,
        httpOnly: true,
      });
      res.json(basket);
    } catch (e) {
      next(next(e));
    }
  }
  // !==================================================================================================
  async increment(req, res, next) {
    try {
      let userId;
      if (req.signedCookies.userId) {
        userId = parseInt(req.signedCookies.userId);
      } else {
        return next(APIError.badRequest('not found cookies'));
      }
      const { productId, quantity } = req.params;
      const basket = await BasketModel.increment(userId, productId, quantity);
      res.cookie('basketId', basket.id, {
        maxAge,
        signed,
        sameSite: 'Strict',
        secure,
        httpOnly: true,
      });
      res.json(basket);
    } catch (e) {
      next(next(e));
    }
  }
  // !==================================================================================================
  async decrement(req, res, next) {
    try {
      let userId;
      if (req.signedCookies.userId) {
        userId = parseInt(req.signedCookies.userId);
      } else {
        return next(APIError.badRequest('not found cookies'));
      }
      const { productId, quantity } = req.params;
      const basket = await BasketModel.decrement(userId, productId, quantity);
      res.cookie('basketId', basket.id, {
        maxAge,
        signed,
        sameSite: 'Strict',
        secure,
        httpOnly: true,
      });
      res.json(basket);
    } catch (e) {
      next(next(e));
    }
  }
  // !==================================================================================================
  async remove(req, res, next) {
    try {
      let userId;
      if (req.signedCookies.userId) {
        userId = parseInt(req.signedCookies.userId);
      } else {
        return next(APIError.badRequest('not found cookies'));
      }
      const basket = await BasketModel.remove(userId, req.params.productId);
      res.cookie('basketId', basket.id, {
        maxAge,
        signed,
        sameSite: 'Strict',
        secure,
        httpOnly: true,
      });
      res.json(basket);
    } catch (e) {
      next(next(e));
    }
  }
  // !==================================================================================================
  async clear(req, res, next) {
    try {
      let userId;
      if (req.signedCookies.userId) {
        userId = parseInt(req.signedCookies.userId);
      } else {
        return next(APIError.badRequest('not found cookies'));
      }
      const basket = await BasketModel.clear(userId);
      res.cookie('basketId', basket.id, {
        maxAge,
        signed,
        sameSite: 'Strict',
        secure,
        httpOnly: true,
      });
      res.json(basket);
    } catch (e) {
      next(next(e));
    }
  }
}

module.exports = new BasketControllers();
