function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min)

}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('BAD VALUE');

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Frase 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta); //escreve Frase 1
        return esperaAi(555, rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta); //escreve frase 2
        return esperaAi('Frase 3', rand(1, 3));
    })
    .then (resposta => {
        console.log(resposta); //escreve frase 3
    })
    .catch(e => {
        console.log('ERRO ', e);
    });