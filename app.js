
const express = require('express');
const https = require('https');
const app = express();
const axios = require('axios');
const url = 'https://shielded-island-23034.herokuapp.com/'

var status;
var dados2;

app.listen(3000, function () {
    console.log('Your application is listening on port 3000!')
});

axios.post(url + 'login', {
    email: 'gabriel@hotmail.com',
    senha: '123'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error)
  });



/*
https.get(url + 'reclamacoes', (res) => {
    status = res.statusCode;
    res.on("data", (data) => {
        var objeto = JSON.parse(data);
        console.log(objeto[0]._id)
     });
}) 

*/

