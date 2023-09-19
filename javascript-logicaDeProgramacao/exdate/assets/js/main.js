function global () {

const data = new Date();
console.log(data.getMonth());
const diaSemana = data.getDay();
const mes = data.getMonth();
const hora = data.getHours();
const min = data.getMinutes();
const seg = data.getSeconds();
function obterDiaSemana(diaSemana) {
    let diaSemanaEscrito;

    switch (diaSemana){
    case 0:
        diaSemanaEscrito = 'Domingo';
        break;
    case 1:
        diaSemanaEscrito = 'Segunda';
        break;
    case 2:
        diaSemanaEscrito = 'Terça';             
        break;
    case 3:
        diaSemanaEscrito = 'Quarta';             
        break;
    case 4:
        diaSemanaEscrito = 'Quinta'; 
        break;
    case 5:
        diaSemanaEscrito = 'Sexta';
        break;
    case 6:
        diaSemanaEscrito = 'Sábado';
        break;
    default:
        diaSemanaEscrito = '';
    }   
    return diaSemanaEscrito;
}

function obterMes(mes) {
    let mesEscrito;
    switch (mes){
    case 0:
        mesEscrito = 'Janeiro';
        break;
    case 1:
        mesEscrito = 'Fevereiro';
        break;
    case 2: 
        mesEscrito = 'Março';            
        break;
    case 3:
        mesEscrito = 'Abril';             
        break;
    case 4:
        mesEscrito = 'Maio';
        break;
    case 5:
        mesEscrito = 'Junho';
        break;
    case 6:
        mesEscrito = 'Julho';
        break;
    case 7: 
        mesEscrito = 'Agosto';
        break;  
    case 8:
        mesEscrito = 'Setembro';
        break;
    case 9:
        mesEscrito = 'Outubro';
        break;
    case 10:
        mesEscrito = 'Novembro';
        break;
    case 11:
        mesEscrito = 'Dezembro';
        break;
    default:
        mesEscrito = '';
        break;
    }   
    return mesEscrito;
}

function obterHora (hora) {
    let horaTexto = hora < 10 ? `0${hora}` : `${hora}`;
    return horaTexto;
}

function obterMinutos (min) {
    let minutosTexto = min < 10 ? `0${min}` : `${min}`;
    return minutosTexto;
}

function obterSegundos (seg) {
    let segundosTexto = seg < 10 ? `0${seg}` : `${seg}`;
    return segundosTexto;
}


const tela = document.querySelector('.titulo');
tela.innerHTML = `${obterDiaSemana(diaSemana)}, ${data.getDate()} de ${obterMes(mes)} de ${data.getFullYear()} <br> ${obterHora(hora)}:${obterMinutos(min)}:${obterSegundos(seg)}`;
}

global();