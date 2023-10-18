// Array de letras para el DNI
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

function calcularLetraDNI() {
    let numeroDNIUsuario = document.getElementById("numeroDNI").value;
    let letraDNIUsuario = document.getElementById("letraDNI").value.toUpperCase();
    let resultadoElement = document.getElementById("resultado");

    if (!numeroDNIUsuario || !letraDNIUsuario) {
        resultadoElement.textContent = "Por favor, introduce el número y la letra del DNI.";
        return;
    }

    let numeroDNI = parseInt(numeroDNIUsuario);

    if (isNaN(numeroDNI) || numeroDNI < 0 || numeroDNI > 99999999) {
        resultadoElement.textContent = "Número de DNI no válido.";
        return;
    }

    if (letraDNIUsuario.length > 1) {
        resultadoElement.textContent = "Solo una letra";
        return;
    }

    let resto = numeroDNI % 23;
    let letraCalculada = letras[resto];

    if (letraCalculada === letraDNIUsuario) {
        resultadoElement.textContent = "Los campos introducidos son correctos.";
    } else {
        resultadoElement.textContent = "La letra introducida es incorrecta.";
    }
}