const express = require('express');

const apiV1 = require('./api1');
const apiV2 = require('./api2');

const app = express();

app.use('/v1', apiV1);
app.use('/v2', apiV2);

app.listen(3000, function () {
  console.log('App started on port 3000');
});
