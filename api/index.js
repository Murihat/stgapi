const express = require('express');
const path = require('path');

const app = express();

// Middleware JSON
app.use(express.json());

// 🔥 STATIC FILES
app.use(express.static(path.join(__dirname, '../public')));

// API GET
app.get('/api/hello', (req, res) => {
  res.json({
    message: 'Hello from Express API 🚀'
  });
});

// API POST
app.post('/api/hello', (req, res) => {
  res.json({
    received: req.body
  });
});

// Start server (LOCAL)
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express API running at http://localhost:${PORT}`);
});
