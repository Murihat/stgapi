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

// BASE API PATH
const BASE = '/api';
app.use(BASE, router);

// =======================
// LOCAL SERVER
// =======================
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 API running at http://localhost:${PORT}`);
});
