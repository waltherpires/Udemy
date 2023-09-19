const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

const {ndereco: {erua, numero} } = pessoa; 

/* 
const {nome: n ='', sobrenome} = pessoa;
console.log(n, sobrenome); */