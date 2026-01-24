const express = require('express');
const router = express.Router();
const brandsCtrl = require('../controllers/brands/brands.ctrl');

router.get('/brands', brandsCtrl.getAll);
router.get('/brands/:id', brandsCtrl.getById);

module.exports = router;
