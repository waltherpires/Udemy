const frutas = ['Maçã', 'Uva', 'Pêra'];

for (let i in frutas) {
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Walther',
    sobrenome: 'Oliveira',
    idade: 24
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}