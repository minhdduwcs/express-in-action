const express = require('express');
const path = require('path');

const app = express();

const filePath = path.join(__dirname, 'celine.jpg');
app.use(function (req, res, next) {
  res.sendFile(filePath, function (err) {
    if (err) {
      next(new Error('Error sending file!'));
    }
  });
});

app.use(function (err, req, res, next) {
  console.error(err);
  next(err);
});

app.use(function (err, req, res, next) {
  res.status(500);
  res.send('Internal Server Error.');
});

app.listen(3000, function () {
  console.log("App started on port 3000");
});
