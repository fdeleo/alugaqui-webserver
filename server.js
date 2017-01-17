const express = require('express');

var app = express();

/* Load Web Server *
*** USE CORRECT RELATIVE PATH TO THE INDEX ***
*/

app.use(express.static('../alugaqui-client-web'))

// Bind the application to a port on our machine (so it can actually work)
app.listen(3000);


