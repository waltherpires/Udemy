// Factory function (Função fábrica)
function criaPessoa(nome, sobrenome, a, p) {
    return { 
        nome,
        sobrenome,

        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala: function(assunto) {
            return `${this.nome} está ${assunto}.`;
        },
        altura: a,
        peso: p,
        // Getter
        get imc() { // get -> finge ser um atributo em vez de função
            const indice = this.peso /(this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8 , 80);
const p2 = criaPessoa('João', 'Otávio', 1.90 , 57);
const p3 = criaPessoa('Junior', 'Otávio', 1.5 , 110);
console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);
