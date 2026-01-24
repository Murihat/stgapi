const express = require('express');
const router = express.Router();
const brandsCtrl = require('../controllers/brands/brands.ctrl');


router.get('/api/brands', brandsCtrl.getAll);
router.get('/api/brands/:id', brandsCtrl.getById);


// router.use('/api', require('./brands.router'));
// router.use('/banners', require('./banners.router'));
// router.use('/moments', require('./moments.router'));

module.exports = router;
