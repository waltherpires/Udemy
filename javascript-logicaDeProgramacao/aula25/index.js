const verdadeira = true;

// Let tem escopo de bloco { ... bloco }
// Var só tem escopo de função
let nome = 'Luiz' ; //criando
var nome2 = 'Luiz'; //criando

var nome2 = 'Rodrigo' //Redeclarando
if (verdadeira) {
    let nome = 'Otávio'; //Criando
    var nome2 = 'Rogério'; //Redeclarando

    if (verdadeira) {
        let nome = 'Outra coisa'; //Criando
        var nome2 = 'Ronaldo'; //Redeclarando
    }
}

function falaOi () {

    if (verdadeira) {
        let nome = 'Silvio';
        var sobrenome = 'Miranda';
    }
    console.log(nome, sobrenome);
}


