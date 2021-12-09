const express = require('express');
const app = express();

const { config } = require('./config/index');
const procesosApi = require('./routes/procesos');
//body parser
app.use(express.json());

procesosApi(app);


app.listen(config.port, function() {
    console.log(`Listening http://localhost:${config.port}`);
  });