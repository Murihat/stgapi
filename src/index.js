const app = require('./app');

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Local API running at http://localhost:${PORT}`);
});

// const app = require('./app');

// module.exports = app;
