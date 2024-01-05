require('dotenv').config(); //variáveis de ambiente configuradas em .env
const express = require('express');
const app = express();
const mongoose = require('mongoose'); //modelar a base de dados
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('pronto');
    })
    .catch(e => console.log(e));
const session = require('express-session'); //identificar navegador do cliente (usando cookie, ID)
const MongoStore = require('connect-mongo'); //Sessões vão ser salvas na base de dados (Do contrário seriam salvas em memória)
const flash = require('connect-flash'); // flash messages: mensagens que se apagam rapidamente (são salvas em sessões)
const routes = require('./routes'); //Rotas da aplicação > /Home,/Contato...
const path = require('path'); //Trabalhar com caminhos
const helmet = require('helmet'); //Recomendação do express para segurança
const csrf = require('csurf'); //Tokens de segurança para os formulários (evita que sites externos insiram malwares no nosso site)
const { middlewareGlobal, checkCsrfError, csrfMiddleware} = require('./src/middlewares/middleware'); //middlewares: Funções que são executadas na rota.

app.use(helmet());
app.use(express.urlencoded({extended: true })); //tratar o formulario, podemos postar formulários pra dentro da aplicação
app.use(express.json()); //Permite postar JSON pra dentro da aplicação
app.use(express.static(path.resolve(__dirname, 'public'))); //acessar arquivos estáticos diretamente

const sessionOptions = session({
    secret: 'gorkiogjk2iji123123 qweqweqw9e i1239012i 31i231()12312',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views')); //Escolhendo a pasta com arquivos que devem renderizar na tela (exemplo: html)
app.set('view engine', 'ejs'); //engine que renderiza esse "html" (ejs, no caso)

app.use(csrf());

// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
})

