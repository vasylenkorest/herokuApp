const express = require('express');
const app = express();
const url = require("url");
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {

  res.send('No!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
