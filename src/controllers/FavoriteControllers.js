const FavoriteModel = require('../models/Favorite.js');
const APIError = require('../errors/AppError.js');

const maxAge = 60 * 60 * 1000 * 24 * 365;

class FAvoriteControllers {
  async getOne(req, res, next) {
    try {
      let favorite;

      if (req.signedCookies.userId) {
        favorite = await FavoriteModel.getOne(parseInt(req.signedCookies.userId), req);
      } else {
        return next(APIError.badRequest('not found cookies'));
      }

      res.cookie('favoriteId', favorite.id, {
        maxAge,
        signed: true,
        sameSite: 'Strict',
        secure: true,
        httpOnly: true,
      });
      res.json(favorite);
    } catch (e) {
      next(e);
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
      const { productId } = req.params;
      const favorite = await FavoriteModel.append(userId, productId);

      res.cookie('favoriteId', favorite.id, {
        maxAge,
        signed: true,
        sameSite: 'Strict',
        secure: true,
        httpOnly: true,
      });
      res.json(favorite);
    } catch (e) {
      next(e);
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
      const favorite = await BasketModel.clear(userId);

      res.cookie('favoriteId', favorite.id, {
        maxAge,
        signed: true,
        sameSite: 'Strict',
        secure: true,
        httpOnly: true,
      });
      res.json(favorite);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new FAvoriteControllers();
