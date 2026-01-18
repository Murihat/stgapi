const express = require('express');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'))

// CORS setup
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: false
}))

app.use('/', require('./routers'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})
module.exports = app;
