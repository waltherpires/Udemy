class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const nome = 'Walther';
const sobrenome = 'Oliveira';

module.exports = {
    nome, sobrenome, Pessoa
};

// const falaNome = () => {
//     console.log(nome, sobrenome);
// };

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// exports.name = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = qualquerCoisa;