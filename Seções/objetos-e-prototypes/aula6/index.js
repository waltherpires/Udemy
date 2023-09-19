function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual/100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual/100));
};

const p1 = new Produto('Camiseta', 50);

// literal
const p2 = {
    nome: 'Caneca',
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);

console.log(p2);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 99
    },
    tamanho: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 42
    },
});

p3.aumento(10);
console.log(p3);

//New Object -> Object.prototype
// const objA = {
//     chaveA: 'A'
//     // __proto__: Object.prototype
// };

// const objB = {
//     chaveA: 'B'
//     // __proto__: objA
// };

// Object.setPrototypeOf(objB, objA);