const express = require('express');
const app = express();

//         Criar   ler   atualizar  apagar
// CRUD -> CREATE, READ, UPDATE,    DELETE
//         POST    GET   PUT        DELETE

// http://meusite.com/ <- GET -> Entregue a pagina /
// http://meusite.com/sobre <- GET -> Entregue a pagina /sobre

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text name="nome">
    <button>Tentativa</button>
    <form>
    `);
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente.');
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});

//npm install nodemon --save-dev
//npx nodemon server.js
//configurar em package.json: "start": "nodemon server.js"
//npm start