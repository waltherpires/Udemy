import { geraMaiuscula, geraMinuscula, geraNumero } from "./geradores";

export function gerarSenha(tamanho, [maiuscula, minuscula, numero] ) {
    var senha = [];
    var i = 0;
    while(i < tamanho) {
        if (maiuscula !== 1 && minuscula !== 1 && numero !== 1){
            console.log('erro');
            return 'Erro';
        }
        if(maiuscula === 1) {
            senha.push(geraMaiuscula());
            i++

        }    
        if(minuscula === 1) { 
            senha.push(geraMinuscula());
            i++
        }
        if(numero === 1){
            senha.push(geraNumero());
            i++
        } 

    }
     
    senha = senha.join('');
    return senha;
    
}

  


