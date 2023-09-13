function calcularSumatorio(numero) {
  let suma = 0;

  for (let i = 1; i <= numero; i++) {
    suma += i;
  }

  return suma;
}

let nInicio = 1;
let nFin = 100;
let nEnFila = 0;
let nEnFilaMaxima = 10;
let texto = "<h1>Sumatorio</h1><br>";

for (let n = nInicio; n < nFin+1; n++) {
  if (nEnFila == nEnFilaMaxima) {
    nEnFila = 1;
    texto += "<br>";

  } else {
    nEnFila++;

  }

  texto += calcularSumatorio(n)+",";
}

console.log(texto);
document.getElementById("textoEjercicio").innerHTML = texto;