const express = require('express');
const path = require('path');

const app = express();

// =======================
// MIDDLEWARE
// =======================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =======================
// STATIC FILES
// =======================
app.use(express.static(path.join(__dirname, '../public')));

// =======================
// ROUTER
// =======================
const router = require('./routers');
app.use('/api', router);

module.exports = app;
