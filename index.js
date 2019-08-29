'use strict';
const express = require('express');
const app = express();
app.use('/', (req, res) => {
    req.send('hello!');
});
app.listen(80, ()=> {
  console.log('Express Server 01');
});
