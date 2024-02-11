const { Router } = require('express');
const router = new Router();
const Image = require('../controllers/ImageControllers');

router.post('/', Image.set);
router.patch('/', Image.change);
router.get('/', Image.get);

module.exports = router;
