//Codigo de funcionamento do relogio 
setInterval(function () {
    //Seletor de hora
    let novaHora = new Date();

    let hora = novaHora.getHours();
    let minuto = novaHora.getMinutes();

    hora = zero(hora);
    minuto = zero(minuto);

    document.getElementById('horan').textContent = `${hora} : ${minuto}`;

    //Mensagem
    if (hora >= 6 && hora < 12) {
        console.log('Bom Dia');
        document.getElementById('bomD').textContent = " um bom dia";
    } else if (hora >= 12 && hora < 18) {
        console.log('Boa Tarde');
        document.getElementById('bomD').textContent = " uma boa tarde";
    } else if (hora >= 18 && hora <= 23) {
        console.log('Boa Noite');
        document.getElementById('bomD').textContent = " uma boa noite";
    } else if (hora >= 0 && hora < 6) {
        console.log('Boa Noite');
        document.getElementById('bomD').textContent = " uma boa noite";
    } else {
        console.error('Erro');
    }

}, 1000);

// Zero Vazio
function zero(x) {
    if (x < 10) {
        x = '0' + x;
    }
    return x;
}
