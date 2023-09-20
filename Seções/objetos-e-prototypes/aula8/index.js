function ValidarCPF(cpf){
    Object.defineProperty(this, 'cpf', {
        get: function() {
            return cpf.replace(/\D+/g, '');
        }
    })
}

ValidarCPF.prototype.valida = function () {
    if(typeof this.cpf === 'undefined') return false;
    if(this.cpf.length !== 11) return false;
    if(this.isSequencia()) return false;
    const cpf = this.cpf;
    const arraycpf = this.separarCPF(cpf);
    const criarDigitos = this.verificarDigitos(arraycpf);
    return true;
}

ValidarCPF.prototype.separarCPF = function (cpf) { //pode ser trocado por const cpfArray = Array.from(cpf)
    
    const digitos = [];
    for (let digito of cpf) {
        digito = parseInt(digito);
        digitos.push(digito);
    }
    return digitos;
}
ValidarCPF.prototype.verificarDigitos = function (array) {
    let digitos = array;
    let removidos = digitos.splice(-2, 2); //remove os dois ultimos digitos
    let total = digitos.reduce((acumulador, valor, indice) => {
        acumulador += valor*(12-(indice + 2)); //faz a conta de verificação do primeiro dígito
        return acumulador;
    }, 0);

    if (11 - (total % 11) > 9){             //const total = 11 - (total % 11);
        total = 0;                          //return total > 9 ? '0' : String(digito);
    } else{                                                                 
        total = 11 - (total % 11); 
    } 

    let verificar = [total];
    digitos = [...digitos, total];

    let total2 = digitos.reduce((acumulador, valor, indice) => {
        acumulador += valor*(13-(indice + 2)); //faz a conta de verificação do segundo dígito
        return acumulador;
    }, 0);

    if (11 - (total2 % 11) > 9) {
        total2 = 0; 
    } else{
        total2 = 11 - (total2 % 11);
    }

    verificar = [total, total2]; 
    digitos =  [...digitos, total2];
    
    if (removidos[0] === verificar[0] && removidos[1] === verificar[1]){
         return console.log('CPF válido');
    }
    return console.log('CPF inválido');
}

ValidarCPF.prototype.isSequencia = function() {
    return this.cpf[0].repeat(this.cpf.length) === this.cpf;
}

function NovoCPF(cpf) {
    ValidarCPF.call(this, cpf);
}
NovoCPF.prototype = Object.create(ValidarCPF.prototype);
NovoCPF.prototype.constructor = NovoCPF;

const meucpf =  new NovoCPF('073.418.273-27');
console.log(meucpf.valida());
