import validator from 'validator';

export default class Cadastro {
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
        console.log('Cheguei aqui');
        const el = e.target;
        const nomeInput = el.querySelector('input[name="nome"]');
        const sobrenomeInput = el.querySelector('input[name="sobrenome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const telefoneInput = el.querySelector('input[name="telefone"]');
        let error = false;

        const mensagensDeErro = el.querySelectorAll('.error-message');
        mensagensDeErro.forEach(errorMessage => {
            errorMessage.remove();
        })

        if(nomeInput.value === '') {
            const nomeUndefined = document.createElement('p');
            nomeUndefined.innerHTML = "É necessário escrever o nome do contato.";
            nomeUndefined.style.color = 'red';
            nomeUndefined.classList.add('error-message')
            nomeInput.after(nomeUndefined);      
            error = true;
        }
        
        else if(!(/^[a-zA-Z]+$/.test(nomeInput.value))) {
            const nomeInvalido = document.createElement('p');
            nomeInvalido.innerHTML = "O nome só deve possuir letras.";
            nomeInvalido.style.color = 'red';
            nomeInvalido.classList.add('error-message')
            nomeInput.after(nomeInvalido);      
            error = true;
        }

        if(emailInput.value === '' && telefoneInput.value === '') {
            const campoNecessarioEmail = document.createElement('p');
            campoNecessarioEmail.innerHTML =  "É necessário inserir e-mail ou telefone.";
            campoNecessarioEmail.style.color = 'red';
            campoNecessarioEmail.classList.add('error-message')
            emailInput.after(campoNecessarioEmail);      

            const campoNecessarioTelefone = document.createElement('p');
            campoNecessarioTelefone.innerHTML =  "É necessário inserir e-mail ou telefone.";
            campoNecessarioTelefone.style.color = 'red';
            campoNecessarioTelefone.classList.add('error-message')
            telefoneInput.after(campoNecessarioTelefone);      
            error = true;
        }

        if(emailInput.value !== '') {
            if(!validator.isEmail(emailInput.value)){
                const emailInvalido = document.createElement('p');
                emailInvalido.innerHTML = "E-mail inválido";
                emailInvalido.style.color = 'red';
                emailInvalido.classList.add('error-message')
                emailInput.after(emailInvalido);      
                error = true;
            }
        }

        
        if(telefoneInput.value !== '') {
            if(!(/^\d+$/.test(telefoneInput.value))) {
                const telefoneInvalido = document.createElement('p');
                telefoneInvalido.innerHTML = "telefone deve ter apenas dígitos numéricos.";
                telefoneInvalido.style.color = 'red';
                telefoneInvalido.classList.add('error-message')
                telefoneInput.after(telefoneInvalido);      
                error = true;
            }

            else if(telefoneInput.value.length < 9 || telefoneInput.value.length > 11) {
                const tamanhoTelefoneInvalido = document.createElement('p');
                tamanhoTelefoneInvalido.innerHTML = "Telefone deve ter entre 9 e 11 dígitos.";
                tamanhoTelefoneInvalido.style.color = 'red';
                tamanhoTelefoneInvalido.classList.add('error-message')
                telefoneInput.after(tamanhoTelefoneInvalido);      
                error = true;
            }
        }

        if(!error) el.submit();
    }
}