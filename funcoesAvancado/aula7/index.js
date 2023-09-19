// IIFE -> Immediately invoked function expression

(function (idade, peso, altura) {
    const sobrenome = 'Oliveira';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Luiz'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(24, 60, 1.60);