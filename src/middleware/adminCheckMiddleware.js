const admin = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    next();
  }
  try {
    if (req.auth.role !== 'ADMIN') {
      throw new Error('Error, only for administrator');
    }
    next();
  } catch (e) {
    next(e);
  }
};

module.exports = admin;
