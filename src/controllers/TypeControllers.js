const APIError = require('../errors/AppError');
const { Type, Device } = require('../models/mapping');

class TypeControllers {
  async set(req, res, next) {
    try {
      const { name } = req.body;
      if (!name) {
        return next(APIError.badRequest('не задано поле name'));
      }
      let type = await Type.findOne({ where: { name } });
      if (type) {
        return next(APIError.badRequest('already been'));
      }
      await Type.create({ name });
      type = await Type.findAll();
      return res.json({ body: type, message: 'Ok' });
    } catch (e) {
      next(e);
    }
  }
  async get(req, res, next) {
    try {
      const type = await Type.findAll();
      return res.json(type);
    } catch (e) {
      next(e);
    }
  }
  async delete(req, res, next) {
    try {
      const { id } = req.params;

      const device = await Device.findAll({
        where: { typeId: id },
      });
      if (device.length > 0) {
        return next(APIError.badRequest('element cannot be removed'));
      }

      await Type.destroy({ where: { id: id } });
      const type = await Type.findAll();

      return res.json({ body: type, message: 'Ok' });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new TypeControllers();
