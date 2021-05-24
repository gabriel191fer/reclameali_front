const https = require('https');
const url = 'https://shielded-island-23034.herokuapp.com/'

var reclamacoes;
var dados;

https.get(url + 'reclamacoes', (res) => {
    status = res.statusCode;
    res.on("data", (data) => {
        reclamacoes = JSON.parse(data);
     });
}) 

console.log(dados);


function collapse1(){
    let check = document.getElementById("collapsible1");
    let content = document.getElementById("card-content1");
        if (check.checked == true){
      	    content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    }

    function render()
    {
        for(var i = 0; i < reclamacoes.lenght; i++){

        var container = document.getElementById('reclamacao-container');

        var card = document.createElement('div');
        var content = document.createElement('div');
        var header = document.createElement('div');

        body.append(card);
        card.append(header);
        card.append(content);

        card.setAttribute('class', 'reclamacao');
        content.setAttribute('class', 'card-content');
        header.setAttribute('class', 'title');

        var label = document.createElement('label');
        var check = document.createElement('input')
        check.setAttribute('type','checkbox');

        var tipoReclamacao = reclamacoes[i].tipoReclamacao;
        var unidadeConsumidora = reclamacoes[i].unidadeConsumidora;
        var prioridadeAssociada = reclamacoes[i].prioridadeAssociada;
        var cep = reclamacoes[i].local.cep;
        var complemento = reclamacoes[i].local.complemento;


        }

    }