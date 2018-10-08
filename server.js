require('newrelic');
const axios = require('axios');
// require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use( express.static(path.join(__dirname, 'public')));

app.get('/get', (req, res) => {
 
    axios.get(`http://localhost:9002/get?id=${req.query.id}`)
    .then(({data}) => {
      res.send(data);
    })
    .catch(function (error) {
      console.log(error);
    });
  } 
);

app.listen(port, () => {
  console.log(`Proxy server listening on port ${port} `);
});
