import './assets/css/style.css';
import { gerarSenha } from './modules/FormGeraSenha';



function obterTamanho() {
    const tamanhoEntrada = document.querySelector('.tamanhoEntrada');
    const tamanho = Number(tamanhoEntrada.value);
    return tamanho;
}

function adicionar() {
    const maiusculas = document.querySelector('.chk-maiusculas');
    const minusculas = document.querySelector('.chk-minusculas');
    const numeros = document.querySelector('.chk-numeros');
    const simbolos = document.querySelector('.chk-simbolos');

    const verificador = [];

    verificador.push(maiusculas.checked ? 1 : 0);
    verificador.push(minusculas.checked ? 1 : 0);
    verificador.push(numeros.checked ? 1 : 0);
    
    return verificador;
}

function saida(gerarSenha){
    const div = document.querySelector('.senha-gerada');
    const novaSenha = gerarSenha;
    div.innerHTML = `${novaSenha}`;
}

function executar() {
    obterTamanho();
    if(typeof obterTamanho() !== 'undefined') adicionar();
    if (typeof adicionar() !== 'undefined') {
        const senhaGerada = gerarSenha(obterTamanho(), adicionar());
        saida(senhaGerada);
    }
}


document.addEventListener('click',(e) => {
    const el = e.target;
    if (el.classList.contains('gerar-senha')) executar();
});



