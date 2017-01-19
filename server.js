const express = require('express');
const hbs = require('hbs');

var request = require('request');
var fs = require('fs');
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
/* Load Web Server *
*** USE CORRECT RELATIVE PATH TO THE INDEX ***
*/
app.use(express.static('../alugaqui-client-web'));

/* Adds search function responses */

/* SEARCH - 1 - BAIRRO */
app.get('/bairro/:bairro', (req, res) =>{

  /* Logic to search properties that have the respective parameter*/
  // var resultado = buscaImovel(req);
  buscaImovel(req);

  fs.readFile('file.json', 'utf8' , function (err,data) {
  if (err) {
    return console.log(err);
  }
  propertyData = JSON.parse(data);
  var result = {
                imovel: propertyData ,
                };

  console.log('RESULTADO: \n');
  console.log(result);
  /* Render listragemImoveis pages with the GET params from the request */
  res.render('listagemImoveis.hbs' , result);
  });

});

// Bind the application to a port on our machine (so it can actually work)
app.listen(3000);

/* Function buscaImovel to retrieve results from DB */
function buscaImovel(req) {
  var paramBairro = req.params.bairro ;
  //var paramBairro = req.params.bairro.toLowerCase();
  var searchUrl = 'http://138.68.27.226:8080/imoveis/';
  // Add later the complement with neighborhood
  var searchBairroUrl = searchUrl + paramBairro;
  var resultado = [];

  var busca = request({
    url: searchBairroUrl ,
    json: true
  }
  , function (error, response, body)
  {
    if (!error && response.statusCode === 200) {
          console.log('BODY: \n');
          console.log(body); // Print the json response

          // fs.writeFileSync

          fs.writeFileSync('file.json', JSON.stringify(body) , 'utf8');
          // , function(err){
          //   if(err){console.log(err);} else {console.log("File saved successfully");}
          // }

        }
    else{
      return(-1);
    }
  });
};
