const express = require('express');
const app = express();
const PORT = 3000;

const sequelize = require('./config/db');
const usuario = require('./models/usuario');
const ponto = require('./models/ponto');

sequelize.sync({alter: true})
.then(() => {
    console.log("DB sincronizado");
}).catch((error) => {
    console.log("Erro ao sincronizar o DB: " + error);
});


// ROTAS
app.get('/', (req, res) => {
    res.send("Chamada ao recurso realizada com sucesso");
});

// retornar todos os usuários
app.get('/users', (req, res) => {
    res.send("Aqui vou retornar todos os usuários do sistema")
});

app.get('/user/:id', (req, res) => {
    res.send(req.params.id)
});

app.post('/rotapost', (req, res) => {
    res.send("Chamada ao recurso usando o post realizada com sucesso");
});


app.listen(PORT, () => {
    console.log("Servidor aguardando requisições");
});