// Factory functions / Constructor functions / Classes
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // return this; 
}
// {} <- this -> this
const p1 = new Pessoa('Luiz', 'Miranda');




/* function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1.nomeCompleto); */

/* const pessoa1 = {
    nome: 'Walther',
    sobrenome: 'Oliveira'
}

const chave = 'sobrenome';
console.log(pessoa1['sobrenome']);
console.log(pessoa1[chave]);
console.log(pessoa1.sobrenome);

const pessoa2 = new Object();
pessoa2.nome = 'Walther';
pessoa2.sobrenome = 'Oliveira';
pessoa2.idade = 24;
pessoa2.falarNome = function() {
  return (`${this.nome} está falando seu nome.`);
};
pessoa2.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa2.getDataNascimento()); */