module.exports = function (req, res, next) {
  if (req.method === 'OPTIONS') {
    next();
  }
  try {
    const { email, password, number } = req.body;

    if (email && !/[a-z0-9%^$#_]*@[a-z\-0-9]*\.[a-z]{2,4}/gi.test(email)) {
      return res.status(405).json({ message: 'Неверный адрес электронной почты' });
    }

    if (number && !/^\d{9,10}$/gi.test(number)) {
      return res.status(405).json({ message: 'Неверный номер телефона' });
    }

    if (password && !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/gm.test(password)) {
      return res.status(405).json({
        message: 'Минимум восемь символов, минимум одна заглавная буква и одна цифра',
      });
    }

    next();
  } catch (e) {
    next(e);
  }
};
