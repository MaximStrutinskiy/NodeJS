var express = require('express');
var router = express.Router();
var index_controller = require('../controllers/indexController');

// Get
router.get('/', index_controller.index_page);

module.exports = router;
