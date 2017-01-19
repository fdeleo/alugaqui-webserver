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
app.listen(3000);

// var searchBairroUrl ;
/* Get Request to './bairro/${neighborhood}' */
app.get('/bairro/:neighborhood', (req, res, next) =>{
  var paramBairro = req.params.neighborhood ;
  //var paramBairro = req.params.bairro.toLowerCase();
  var searchUrl = 'http://138.68.27.226:8080/imoveis/';
  // Add later the complement with neighborhood
  var searchBairroUrl = searchUrl + paramBairro;
  console.log('Teste GET: \n');
  console.log(req.params);
  console.log('Neighborhood URL: \n');
  console.log(searchBairroUrl);

  request({
      url: searchBairroUrl ,
      json: true
    }
    , function (error, response, body){
      if (!error && response.statusCode === 200) {
        console.log('BODY: \n');
        console.log(body); // Print the json response
        var propertyData = body;

        if ( body == '[]' || body == undefined ){
          console.log('Error: Empty JSON string');
        }

        else {
          var result = {
                           imovel: propertyData ,
                        };
          console.log('RESULTADO: \n');
          console.log(result);
        /* Render listagemImoveis pages with the GET params from the request */
          res.render('listagemImoveis.hbs' , result);
        }
      }
      else {
        return(-1);
        console.log('ERRO: \n' + error);
      }
  });
});
