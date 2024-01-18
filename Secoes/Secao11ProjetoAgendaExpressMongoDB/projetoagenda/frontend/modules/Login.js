import validator from 'validator';

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        let error = false;

        const mensagensDeErro = el.querySelectorAll('.error-message');
        mensagensDeErro.forEach(errorMessage => {
            errorMessage.remove();
        })

        if(!validator.isEmail(emailInput.value)) {
            const emailInvalido = document.createElement('p');
            emailInvalido.innerHTML = "E-mail inválido";
            emailInvalido.style.color = 'red';
            emailInvalido.classList.add('error-message')
            emailInput.after(emailInvalido);      
            error = true;
        }

        if(passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            const senhaInvalida = document.createElement('p');
            senhaInvalida.innerHTML = "A senha precisa ter entre 3 e 50 caracteres";
            senhaInvalida.style.color = 'red';
            senhaInvalida.classList.add('error-message')
            passwordInput.after(senhaInvalida);
            error = true;
        }

        if(!error) el.submit();

    }
}