const express = require('express');
const hbs = require('hbs');

var app = express();


app.set('view engine', 'hbs');
/* Load Web Server *
*** USE CORRECT RELATIVE PATH TO THE INDEX ***
*/
app.use(express.static('../alugaqui-client-web'));

/* Adds search function responses */

/* SEARCH - 1 - BAIRRO */
app.get('/bairro/:bairro', (req, res) =>{

  /* Render listragemImoveis pages with the GET params from the request */
  res.render('listagemImoveis.hbs' , req.params)
});

// Bind the application to a port on our machine (so it can actually work)
app.listen(3000);


