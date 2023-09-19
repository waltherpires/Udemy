function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}
 
const relogio = document.querySelector('.relogio');

let segundos = 0;
let timer;
function iniciaRelogio() {
    relogio.style.color = 'black';
     timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
}

function pausarRelogio() {
    relogio.style.color = 'Red';
    setTimeout(function(){
        clearInterval(timer);
    },0);
}

function zerarRelogio() {
    relogio.innerHTML = '00:00:00';
    setTimeout(function(){
        clearInterval(timer);
    },0);
    segundos = 0;
}
document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('iniciar')) {
        clearInterval(timer);
        iniciaRelogio();
    }
    if (el.classList.contains('pausar')) {
        pausarRelogio();
    }
    if (el.classList.contains('zerar')) {
        zerarRelogio()
    }
});
