const express = require("express");

const cors = require("cors");

const axios = require("axios");

const app = express();

const url = "https://shielded-island-23034.herokuapp.com/";

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.listen(3000, () => {
    console.log("connection started at 3000.");
});
// tenta realizar o login. 
function login(email, senha){

    return new Promise( (resolve, reject) => {

        axios.post(url + 'operadores/login', {
           email: email,
           senha: senha
        })
          .then( (res) => {
            resolve(res.status);
          })
          .catch( (err) => {
            reject(err);
        });
    });
}
function get_reclamacoes(){

    return new Promise( (resolve, reject) => {

        axios.get(url + 'reclamacoes', {
        
        }).then( (res) => {
            resolve(res.data);
        }).catch( (err) => {
            reject(err);
        });
    });
}
// Raiz do programa. Envia a tela de login como primeira tela que o usuário visualiza.
app.get("/", (req, res) => {
   res.sendFile(__dirname + "/login.html"); 
});
// Obtém as informações do formulário.
app.post("/", (req, res) => {

    let email = String(req.body.email);
    let senha = String(req.body.senha);
    // passa os dados obtidos para a função criada, exibe a tela de acordo com a promessa.
    login(email, senha)
    .then(result => {
        if(result == 200){
            res.sendFile(__dirname + "/main/main.html");
        }// 500 pro erro do servidor e 404 para recurso não encontrado.
        else{
            res.sendFile(__dirname + "/failure.html");
        }
    })
    .catch(err => {
        res.send(err);
    });
});
get_reclamacoes.then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
});


module.exports = app;