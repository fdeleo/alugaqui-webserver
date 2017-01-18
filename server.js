const express = require('express');
const hbs = require('hbs');

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
  var resultado = buscaImovel(req);
  /* Render listragemImoveis pages with the GET params from the request */
  res.render('listagemImoveis.hbs' , resultado)
});

// Bind the application to a port on our machine (so it can actually work)
app.listen(3000);


/* Busca Imovel */
function buscaImovel(req) {
  var paramBairro = req.params.bairro.toLowerCase();
  resultado = { content: 'lista de imoveis'};
  resultado.imovel = [];
  var imoveis = criaImovel();

  console.log('Imoveis: \n');
  console.log(imoveis);

  console.log('Bairro: \n');
  console.log(paramBairro);

  /* Get one item from collection imoveis and search trough its attributes */
  var contadorImovel = 0;
  console.log('\n BUSCA \n');

  var imovel = undefined;

  while ( (imovel = imoveis.imovel.shift()) != undefined ){
    var bairro = imovel.bairro;
    if (bairro == paramBairro){
      contadorImovel++;
      resultado.imovel.push(imovel);
      console.log('Imovel: \n');
      console.log(imovel);
    }
  }

  console.log('Resultado Final: \n');
  console.log(resultado);

  return resultado;
}

/* Cria Imovel */
function criaImovel() {

  imoveis = { content: 'lista de imoveis'};
  imoveis.imovel = [];

  var imovel1 = {
    bairro : "barra" ,
    endereco : "Rua de teste para validacao 200" ,
    cep: "00000-000"
  };

  imoveis.imovel.push(imovel1);
  console.log('Imoveis = Imovel1 \n');
  console.log(imoveis);

  var imovel2 = {
    bairro : "barra" ,
    endereco : "Rua de teste para validacao 800" ,
    cep: "22631-450"
  };

  imoveis.imovel.push(imovel2);
  // console.log('Imoveis = Imovel1 + Imovel2 \n');
  // console.log(imoveis);

  var imovel3 = {
    bairro : "botafogo" ,
    endereco : "Rua de teste na zona sul 444" ,
    cep: "55555-555"
  };

  var tamanho = imoveis.imovel.push(imovel3);
  // console.log('Length Objeto:\n');
  // console.log(tamanho);
  // console.log('Imoveis = Imovel1 + Imovel2 + Imovel3 \n');
  // console.log(imoveis);
  return imoveis;
}
