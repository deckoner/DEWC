function agregarDigito(texto) {
    if (isNaN(parseInt(texto))) {
        return NaN;
    } else {
        let pantallaCalcu = document.getElementById("pantalla");
        pantallaCalcu.value = pantallaCalcu.value + texto;
    }
}

function borrar() {
    let pantallaCalcu = document.getElementById("pantalla");
    pantallaCalcu.value = "";
}

function operacion(texto) {
    let pantallaCalcu = document.getElementById("pantalla");

    switch (texto) {
        case "+":
        case "-":
        case "*":
        case "/":
            pantallaCalcu.value += texto;
            break;
        default:
            // No se realizará ninguna acción en el caso default.
    }
}

function igual() {
    let pantallaCalcu = document.getElementById("pantalla");
    let operacion = pantallaCalcu.value;

    console.log(operacion);

    if (isNaN(operacion)) {
        // Evaluamos la operacion matematica
        resultado = eval(operacion);

        // Escribimos el resultado
        pantallaCalcu.value = resultado;
    }
}