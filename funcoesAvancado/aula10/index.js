// Função construtora -> objetos
// Função fábrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    // Privadas
    const ID = 123456;
    const metodoInterno = function() {

    };

    //Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    }
}

const p1 = new Pessoa('Luiz', 'Otavio');
const p2 = new Pessoa('Walther', 'Oliveira');
