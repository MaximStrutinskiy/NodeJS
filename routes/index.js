var express = require('express');
var router = express.Router();
var index_controller = require('../controllers/indexController');

// Get
router.get('/', index_controller.index_page);

router.get('/user', index_controller.user_page);

module.exports = router;
