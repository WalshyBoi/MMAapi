var express = require('express');
var controller = require('./fighters.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.delete('/:id', controller.destroy);

module.exports = router;

