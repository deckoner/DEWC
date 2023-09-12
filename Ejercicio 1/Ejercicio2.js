let texto = "<h1>Numeros pares entre 1 y 100</h1><br>";
let nColumna = 0;
let nMaximoColumna = 4

for (let index = 1; index < 101; index++) {
    if(index%2 == 0){
        if(nColumna == nMaximoColumna) {
            texto += index + ",<br>"
            nColumna = 0
        } else {
            texto += index + ","
            nColumna++
        }
    }
}

console.log(texto);
document.getElementById("textoEjercicio").innerHTML = texto;