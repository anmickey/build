const logger = require('./logger');
const cookieParser = require('cookie-parser');
const express = require('express');
const config = require('config');
const hpp = require('hpp');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const helmet = require('helmet');
// const nocache = require('nocache');
const path = require('path');
const compression = require('compression');
const PORT = config.get('serverPort') || 5000;
const sequelize = require('./bd');
const router = require('./routers/index');
const { errorMw, toobusyMw } = require('./middleware/index');
const crypto = require('crypto');
const nonce = crypto.randomBytes(16).toString('hex');

const app = express();
// app.set('etag', false);
// app.use(nocache());
app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        scriptSrc: ["'self'", `'nonce-${nonce}'`, 'https://fightgym.mype.host', 'http://localhost:3000'],
      },
    },
  }),
);
app.use(express.json({ limit: '10mb' }));
app.use(compression());
app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    credentials: true,
    optionsSuccessStatus: 200,
    allowedHeaders: ['Accept-Version', 'Authorization', 'Credentials', 'Content-Type'],
  }),
);
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(express.static(path.resolve(__dirname, 'static', 'build')));
app.use(fileUpload({}));
app.use(hpp());
app.use(cookieParser(config.get('secretKey')));
app.use('/api', toobusyMw, router, errorMw);
app.set('view engine', 'ejs');
app.get('/*', async function (_, res, next) {
  try {
    res.render(path.resolve(__dirname, 'static', 'html', 'index'), {
      title: 'Add New Category',
      nonce: nonce,
    });
  } catch (error) {
    next(error);
  }
});

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => logger.info(`Server Listening On Port ${PORT}`));
  } catch (error) {
    logger.error(error.message);
  }
};

start();
