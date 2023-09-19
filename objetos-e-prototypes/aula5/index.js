//Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

//Pessoa.prototype === pesso1.__proto__

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

//instância
const pessoa1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = Função construtora
const data = new Date(); // <- Date = Função construtora

console.dir(pessoa1);
console.dir(data); 
