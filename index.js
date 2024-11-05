const express = require('express');
const app = express();
const PORT = 3000;

const sequelize = require('./config/db');

sequelize.authenticate()
.then(() => {
    console.log("Conexão com o banco de dados realizada com sucesso");
}).catch((error) => {
    console.log("Erro ao tentar conectar com o banco de dados: " + error);
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