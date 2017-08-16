const express = require('express');
const app = express();
const _ = require('lodash');
const router = require('./controllers/index');

// route
app.use('/api/v0', router);

// listener
app.listen(3002, function() {
  console.log("✔ Express server listening on port %d in %s mode", 3002, app.get('env'));
});
