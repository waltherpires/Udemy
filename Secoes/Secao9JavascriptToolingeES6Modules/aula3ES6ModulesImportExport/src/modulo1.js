const nome = 'Walther';
const sobrenome = 'Oliveira';
const idade = 24;

function soma(x, y) {
    return x +y;
}

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

export {nome, sobrenome, idade, soma};