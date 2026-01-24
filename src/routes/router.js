const express = require('express');
const router = express.Router();

// PUBLIC ROUTES
router.use('/brands', require('./brands.router'));
// router.use('/banners', require('./banners.router'));
// router.use('/moments', require('./moments.router'));

module.exports = router;
