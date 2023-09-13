let result = window.prompt("Porfavor introduce una cadena de texto");
let texto = "<p>La cadena de texto tiene una longitud tiene "+result.length+"</p>";

console.log(texto);
document.getElementById("textoEjercicio").innerHTML = texto;