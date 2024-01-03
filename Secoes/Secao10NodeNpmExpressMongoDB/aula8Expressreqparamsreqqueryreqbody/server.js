const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true })); //tratar o formulario

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Tentativa</button>
    <form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    // /:Parametro -- adiciona o parametro
    // /:parametro? -- ? : torna o parametro opcional
    console.log(req.params);
    console.log(req.query);
    // /?nome=roberto&sobrenome=claudio
    res.send(req.query.nome);
});

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`o que você envinou foi: ${req.body.nome}`);
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});
