// defineProperty - defineProperties

function Produto(nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false, // permissão para alterar o valor
        configurable: false // reconfigurar
    });

    Object.defineProperties(this, {

        nome: {
            enumerable: true, // mostra a chave
            value: estoque, // valor
            writable: false, // permissão para alterar o valor
            configurable: false // reconfigurar
        },

        preco: {
            enumerable: true, // mostra a chave
            value: estoque, // valor
            writable: false, // permissão para alterar o valor
            configurable: false // reconfigurar
        },
    });
}
const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));
