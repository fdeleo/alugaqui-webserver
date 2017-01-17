const express = require('express');

var app = express();

// get(url , function) => Function to execute when reaching specified URL
app.get('/', (req, res) =>{
  res.send('Hello Express');
  
}) 

// Bind the application to a port on our machine (so it can actually work)
app.listen(3000);


