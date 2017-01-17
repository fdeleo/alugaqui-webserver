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

  /* Logic to search properties that have the respective parameter*/ 
  buscaImovel(req);
  /* Render listragemImoveis pages with the GET params from the request */
  res.render('listagemImoveis.hbs' , req.params)
});

// Bind the application to a port on our machine (so it can actually work)
app.listen(3000);


/* Busca Imovel */

function buscaImovel(req) {
  var paramBairro = req.params.bairro;
  console.log("Busca do Bairro:");
  console.log(paramBairro);
  
  var buscaResultado = null;
  
  var imovel = criaImovel();
  
  console.log("\n Detalhes do Imovel");
  console.log(imovel);
  console.log(buscaResultado);
    
  if ( paramBairro == imovel.bairro ) {
    buscaResultado = imovel ;
    console.log(buscaResultado);
  }
    
  return buscaResultado;
}

function criaImovel() {
  var imovel = {
    bairro : "barra" ,
    endereco : "Rua de teste para validacao 200" ,
    cep: "00000-000"
  };  
  
  return imovel ;
}

