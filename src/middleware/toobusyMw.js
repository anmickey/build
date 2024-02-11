var toobusy = require('toobusy-js');

module.exports = (_, res, next) => {
  toobusy.maxLag(10);
  toobusy.interval(250);
  if (toobusy()) {
    res.send(503, 'Server Too Busy');
  } else {
    next();
  }
};
