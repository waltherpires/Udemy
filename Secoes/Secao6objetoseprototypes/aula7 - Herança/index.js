// Produto -> aumento, desconto
// Camiseta = Cor , caneca = material
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
}
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco); //executa a função Produto em camiseta
    this.cor = cor; // o filho "Camiseta" tem mais atributos que o pai "Produto"
}
Camiseta.prototype = Object.create(Produto.prototype); // O prototype de Camiseta fica igual ao de Produto
// A linha acima gera um problema, todo obj criado por Camiseta vai receber Produto como função construtora
Camiseta.prototype.constructor = Camiseta; //Essa linha corrige o problema acima -> Construtor = Camiseta

Camiseta.prototype.aumento = function(percentual) { //Substitui o aumento padrão de Produto (somente para Camiseta)
    this.preco += this.preco*(percentual/100);
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;


const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Caneca', 13, 'Plástico', 5);

console.log(caneca);
console.log(camiseta);
console.log(produto);
