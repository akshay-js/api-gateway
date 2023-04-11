const express = require('express')
const app = express()
const port = 5000

app.get('/hello-world', (req, res) => {
  res.send('Hello World! from API Gateway service')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
