let contadorElemento = 0;
let texto = "<h1>Sumatorios</h1><br>";
let numero;

function calcularSumatorio(numero) {
    let suma = 0;
  
    for (let i = 1; i <= numero; i++) {
      suma += i;
    }

    return suma;
}

for (let n = 0; n < 1000; n++) {
    numero = calcularSumatorio(n);

    if (numero > 1000) {
        break;
    }
    
    if (numero % 2 !== 0) {
        if (contadorElemento == 4) {
            texto += "<br>"+numero+",";
            contadorElemento = 1;
        } else {
            texto += numero+",";
            contadorElemento++;
        };
    }
}

console.log(texto);
document.getElementById("textoEjercicio").innerHTML = texto;