function Calculadora () {
    this.display = document.querySelector('.display');

    this.iniciar = () => {
        this.leitor();
        this.pressionarEnter();
    }
  
    this.pressionarEnter = () => {
        document.addEventListener('keypress', e => {
            if(e.keyCode !== 13) return;
            this.calculaNumero();
        })
    }

    this.leitor = () => {
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num')) this.adicionarNumero(el);
            if (el.classList.contains('btn-del')) this.deletarNumero();
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-eq')) this.calculaNumero();
        })
    }

    this.calculaNumero = () => {

        try {
            const conta = eval(this.display.value);

            if(!conta) {
                alert('Conta inválida');
                return;
            }
            
            this.display.value = conta;
        } catch(e) {
            alert('Conta inválida');
            return;
        }

    }
    this.clear = () => this.display.value = '';
    this.deletarNumero = () => this.display.value = this.display.value.slice(0, -1);
    this.adicionarNumero = el => {
        this.display.value += el.innerText;
        this.display.focus();
    }
}

const calculadora = new Calculadora();
calculadora.iniciar();
