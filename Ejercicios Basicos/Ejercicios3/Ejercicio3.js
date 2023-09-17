let texto = "<h1>Numeros pares entre 1 y 100</h1><br>";
let nColumna = 0;
let nMaximoColumna = 4;
let nMaximo = 100;
let n = 1;
let terminado = true;

while (terminado) {
    if (n % 2 == 0) {
        if (nColumna == nMaximoColumna) {
            texto += n + ",<br>";
            nColumna = 0;
        } else {
            texto += n + ",";
            nColumna++;
        }
    }
    
    n++;

    if (n > nMaximo) {
        terminado = false;
    }
}

console.log(texto);
document.getElementById("textoEjercicio").innerHTML = texto;
