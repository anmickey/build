const { Op } = require('sequelize');
const sequelize = require('sequelize');
const APIError = require('../errors/AppError');
const { Device, Brand, Color, Type, Rating, DeviceImg, User } = require('../models/mapping');
const fs = require('fs');
const path = require('path');

class DeviceControllers {
  async getAllBrandOrType(req, res, next) {
    try {
      let { brandId, typeId, colorId, sales, low, tall, filter = 'low' } = req.body;

      const brand = JSON.parse(brandId || '[]');
      const lengthBrand = brand.length != 0;
      const color = JSON.parse(colorId || '[]');
      const arrColor = color.length != 0;
      let device;
      let devicesum;
      let order;
      switch (filter) {
        case 'low':
          order = ['price'];
          break;
        case 'high':
          order = [['price', 'DESC']];

          break;
      }
      if (lengthBrand && !typeId && !arrColor) {
        device = await Device.findAndCountAll({
          where: {
            brandId: [...brand],
            sale: { [Op.not]: sales ? 0 : -1 },
            price: { [Op.lte]: +tall, [Op.gte]: +low },
          },
          include: [
            { model: Brand, as: 'brand' },
            { model: Type, as: 'type' },
            { model: Rating, as: 'ratings' },
            {
              model: DeviceImg,
              as: 'deviceimg',
            },
          ],
          order: [order],
        });

        devicesum = await Device.findAll({
          where: {
            brandId: [...brand],
          },
          attributes: [[sequelize.fn('max', sequelize.col('price')), 'total-price']],
        });
      } else if (lengthBrand && !typeId && arrColor) {
        device = await Device.findAndCountAll({
          where: {
            brandId: [...brand],
            colorId: [...color],
            sale: { [Op.not]: sales ? 0 : -1 },
            price: { [Op.lte]: +tall, [Op.gte]: +low },
          },
          include: [
            { model: Brand, as: 'brand' },
            { model: Type, as: 'type' },
            { model: Rating, as: 'ratings' },
            {
              model: DeviceImg,
              as: 'deviceimg',
            },
          ],
          order: [order],
        });

        devicesum = await Device.findAll({
          where: {
            brandId: [...brand],
            colorId: [...color],
          },
          attributes: [[sequelize.fn('max', sequelize.col('price')), 'total-price']],
        });
      } else if (!lengthBrand && typeId && !arrColor) {
        device = await Device.findAndCountAll({
          where: {
            typeId,
            sale: { [Op.not]: sales ? 0 : -1 },
            price: { [Op.lte]: +tall, [Op.gte]: +low },
          },
          include: [
            { model: Brand, as: 'brand' },
            { model: Type, as: 'type' },
            { model: Rating, as: 'ratings' },
            {
              model: DeviceImg,
              as: 'deviceimg',
            },
          ],
          order: [order],
        });

        devicesum = await Device.findAll({
          where: {
            typeId,
          },
          attributes: [[sequelize.fn('max', sequelize.col('price')), 'total-price']],
        });
      } else if (!lengthBrand && typeId && arrColor) {
        device = await Device.findAndCountAll({
          where: {
            typeId,
            colorId: [...color],
            sale: { [Op.not]: sales ? 0 : -1 },
            price: { [Op.lte]: +tall, [Op.gte]: +low },
          },
          include: [
            { model: Brand, as: 'brand' },
            { model: Type, as: 'type' },
            { model: Rating, as: 'ratings' },
            {
              model: DeviceImg,
              as: 'deviceimg',
            },
          ],
          order: [order],
        });

        devicesum = await Device.findAll({
          where: {
            typeId,
          },
          attributes: [[sequelize.fn('max', sequelize.col('price')), 'total-price']],
        });
      } else if (lengthBrand && typeId && !arrColor) {
        device = await Device.findAndCountAll({
          where: {
            typeId,
            brandId: [...brand],
            sale: { [Op.not]: sales ? 0 : -1 },
            price: { [Op.lte]: +tall, [Op.gte]: +low },
          },
          include: [
            { model: Brand, as: 'brand' },
            { model: Type, as: 'type' },
            { model: Rating, as: 'ratings' },
            {
              model: DeviceImg,
              as: 'deviceimg',
            },
          ],
          order: [order],
        });

        devicesum = await Device.findAll({
          where: {
            typeId,
          },
          attributes: [[sequelize.fn('max', sequelize.col('price')), 'total-price']],
        });
      } else if (lengthBrand && typeId && arrColor) {
        device = await Device.findAndCountAll({
          where: {
            typeId,
            brandId: [...brand],
            colorId: [...color],
            sale: { [Op.not]: sales ? 0 : -1 },
            price: { [Op.lte]: +tall, [Op.gte]: +low },
          },
          include: [
            { model: Brand, as: 'brand' },
            { model: Type, as: 'type' },
            { model: Rating, as: 'ratings' },
            {
              model: DeviceImg,
              as: 'deviceimg',
            },
          ],
          order: [order],
        });

        devicesum = await Device.findAll({
          where: {
            typeId,
          },
          attributes: [[sequelize.fn('max', sequelize.col('price')), 'total-price']],
        });
      }

      device.sum = devicesum[0].dataValues['total-price'];

      return res.json(device);
    } catch (e) {
      next(e);
    }
  }

  async getGoodsList(req, res, next) {
    try {
      const { typeId, page = 1, limit = 10 } = req.body;
      const offset = (page - 1) * limit;
      let device;

      if (typeId) {
        device = await Device.findAndCountAll({
          include: [
            { model: Brand, as: 'brand' },
            { model: Type, as: 'type' },
          ],
          offset,
          limit,
        });
      } else {
        device = await Device.findAndCountAll({
          include: [
            { model: Brand, as: 'brand' },
            { model: Type, as: 'type' },
          ],
          order: [['createdAt', 'DESC']],
          limit,
          offset,
        });
      }

      return res.json({ device, message: 'Ok' });
    } catch (e) {
      next(e);
    }
  }

  async initialState(req, res, next) {
    try {
      const device = await Device.findAll({
        include: [
          { model: Brand, as: 'brand' },
          { model: Type, as: 'type' },
          { model: Rating, as: 'ratings' },
          {
            model: DeviceImg,
            as: 'deviceimg',
          },
        ],
      });
      const brand = await Brand.findAll();
      const type = await Type.findAll();
      const color = await Color.findAll();

      return res.json({ device, color, type, brand, message: 'Ok' });
    } catch (e) {
      next(e);
    }
  }

  async getTypes(_, res, next) {
    try {
      const brand = await Brand.findAll();
      const type = await Type.findAll();
      const color = await Color.findAll();

      return res.json({ color, type, brand, message: 'Ok' });
    } catch (e) {
      next(e);
    }
  }

  async getAll(req, res, next) {
    try {
      const { sales = 0, tall = 10000, low = 0 } = req.query;
      const device = await Device.findAndCountAll({
        where: {
          sale: { [Op.not]: sales ? 0 : -1 },
          price: { [Op.lte]: +tall, [Op.gte]: +low },
        },

        include: [
          { model: Brand, as: 'brand' },
          { model: Type, as: 'type' },
          { model: Rating, as: 'ratings' },
          {
            model: DeviceImg,
            as: 'deviceimg',
          },
        ],
      });
      return res.json(device);
    } catch (e) {
      next(e);
    }
  }

  async set(req, res, next) {
    try {
      let { name, price, brandId, typeId, colorId, info, deviceimgId, sale, change } = req.body;
      const device = await Device.create({
        name,
        price: parseFloat(price),
        brandId,
        colorId,
        typeId,
        deviceimgId,
        sale,
        info,
        change,
      });
      return res.json({ message: 'Ok', device });
    } catch (e) {
      next(e);
    }
  }

  async get(req, res, next) {
    try {
      const { id } = req.params;

      const device = await Device.findOne({
        where: { id },
        include: [
          { model: Brand, as: 'brand' },
          { model: Type, as: 'type' },
          { model: Rating, as: 'ratings' },
          {
            model: DeviceImg,
            as: 'deviceimg',
          },
        ],
      });

      return res.json({ message: 'Ok', device });
    } catch (e) {
      next(e);
    }
  }

  async change(req, res, next) {
    try {
      const { id, name, price, brandId, typeId, colorId, info = '', sale, change = false } = req.body;
      let device = await Device.findOne({
        where: {
          id,
        },
      });
      const user = await User.findOne({
        where: { id: req.signedCookies.userId },
      });

      if (device.change || change || user.role == 'Admin') {
        device = await Device.update(
          {
            name,
            price,
            brandId,
            colorId,
            typeId,
            sale,
            info,
          },
          {
            where: { id },
          },
        );
        return res.json({ device, message: 'Ok' });
      } else {
        return next(APIError.badRequest('product will not be cahnge'));
      }
    } catch (e) {
      next(e);
    }
  }

  async delete(req, res, next) {
    try {
      const { id, change = false } = req.params;

      let user;
      if (req.signedCookies.userId) {
        user = await User.findOne({
          where: { id: req.signedCookies.userId },
        });
      }
      if (!id) {
        throw new Error('Не указан id пользователя');
      }
      const device = await Device.findOne({
        where: {
          id,
        },
      });

      if (device.change || change || user.role == 'Admin') {
        if (!device) {
          throw new Error('Товар не найден в БД');
        }

        const image = await DeviceImg.findOne({
          where: { id: device.deviceimgId },
        });

        for (const [, value] of Object.entries(JSON.parse(image.img))) {
          if (value) {
            fs.unlinkSync(path.resolve(__dirname, '..', 'static', value));
          }
        }

        image.destroy();

        await device.destroy({ truncate: true, cascade: false });

        return res.json(device);
      } else {
        return next(APIError.badRequest('product will not be delete'));
      }
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new DeviceControllers();
