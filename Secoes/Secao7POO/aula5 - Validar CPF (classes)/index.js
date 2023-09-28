 class ValidarCPF {
    constructor(cpf) {
        this.cpf = cpf;
    }

    get cpfLimpo() {
        return this.cpf.replace(/\D+/g, '');
    }
    valida() {
        if(typeof this.cpfLimpo === 'undefined') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.sequencia()) return false;
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const primeiroDigito = this.obterDigito(cpfParcial);
        const segundoDigito = this.obterDigito(cpfParcial + primeiroDigito);

        const novoCPF = cpfParcial + primeiroDigito + segundoDigito;
        return novoCPF === this.cpfLimpo;
    }

    obterDigito(cpfParcial) {
        
        const cpfArray = Array.from(cpfParcial);
        let regressivo = cpfArray.length + 1;
        const total = cpfArray.reduce((ac, val) => {
            ac += regressivo * Number(val);
            regressivo--;
            return ac;
        }, 0)

        const digito = 11 - (total % 11);
        return digito > 9 ? 0 : digito;
    }

    sequencia() {
        return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }
 }
 const cpfEmTeste = new ValidarCPF('073.428.273-27');
 if(cpfEmTeste.valida()) {
    console.log('CPF válido')
 } else {
    console.log('CPF inválido');
 }