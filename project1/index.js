"use strict";

const express = require('express');
const app = express()

const port = process.env.PORT || 3001;

app.use(express.static('public'))

app.get('/', (req,res) => {
  res.send("Hello world");
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})


