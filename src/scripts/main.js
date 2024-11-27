AOS.init();

const dataDoEvento = new Date ("Dec 7, 2024 19:00:00");
const timeStempoDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {

    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStempoDoEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
    const horasAteOEvento = Math.floor ((distanciaAteOEvento % diasEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor ((distanciaAteOEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}D ${horasAteOEvento}H ${minutosAteOEvento}M ${segundosAteOEvento}S `

    if (distanciaAteOEvento < 0 ){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = ' Evento expirado, aguarde a proxima oportunidade.'
    }

}, 1000);