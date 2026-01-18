const express = require('express');
const app = express();

// Middleware untuk baca JSON body
app.use(express.json());

// Route GET
app.get('/api/hello', (req, res) => {
  res.json({
    message: 'Hello from Express API 🚀'
  });
});

// Route POST
app.post('/api/hello', (req, res) => {
  res.json({
    received: req.body
  });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express API running at http://localhost:${PORT}`);
});
