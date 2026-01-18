const express = require('express');
const router = express.Router();
const brandsCtrl = require('../controllers/brands/brands.ctrl');

router.get('/', brandsCtrl.getAll);
router.get('/:id', brandsCtrl.getById);

module.exports = router;
