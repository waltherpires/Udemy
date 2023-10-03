const path = require('path'); //padrão do node
const axios = require('axios'); //instalado pelo npm
const { Pessoa } = require('./mod1');
const mod1 = require('./mod1');

console.log()

const p1 = new Pessoa('Jão');
console.log(p1);

//const falaNome = require('./mod1').falaNome;

// const mod1 = require('./mod1');
// const falaNome = mod1.falaNome;
// console.log(falaNome());

//Desestruturação
// const { nome, sobrenome, falaNome} = require('./mod1');
