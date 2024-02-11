const Router = require('express');
const router = new Router();
const UserCheckControllers = require('../controllers/UserCheckControllers.js');
const { dataSignUpMw } = require('../middleware/index.js');

router.post('/registration', dataSignUpMw, UserCheckControllers.registration);
router.post('/login', UserCheckControllers.loginCheck);
router.get('/validcode', UserCheckControllers.validcode);

module.exports = router;
