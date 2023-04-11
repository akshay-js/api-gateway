const express = require('express');
const axios = require('axios');

const app = express();
const port = 5000;

app.get('/hello-world', (req, res) => {
  res.send('Hello World! from API Gateway service');
});

app.get('/azure-aks', async (req, res) => {
  console.log('Query string', req.query.url);
   try {
    const response = await axios.get(`${req.query.url}`);
    console.log(response);
     return response;
  } catch (error) {
    console.error(error);
    return error;
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
