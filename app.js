const express = require('express');
const numberRouter = require('./Routes/numberRoutes')
const app = express();

app.use('/numbers', numberRouter);

module.exports = app;