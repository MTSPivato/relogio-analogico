const segundoPonteiro = document.querySelector('.ponteiro-segundos');
const minutoPonteiro = document.querySelector('.ponteiro-minutos');
const horaPonteiro = document.querySelector('.ponteiro-horas');

function setDate() {
    const now = new Date();

    const segundo = now.getSeconds();
    const segundoDegrees = ((segundo / 60) * 360) + 90;
    segundoPonteiro.style.transform = `rotate(${segundoDegrees}deg)`;

    const minuto = now.getMinutes();
    const minutoDegrees = ((minuto / 60) * 360) + ((segundo / 60) * 6) + 90;
    minutoPonteiro.style.transform = `rotate(${minutoDegrees}deg)`;

    const hora = now.getHours();
    const horaDegrees = ((hora / 12) * 360) + ((minuto / 60) * 30) + 90;
    horaPonteiro.style.transform = `rotate(${horaDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();