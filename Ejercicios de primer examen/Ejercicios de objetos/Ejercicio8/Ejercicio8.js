// Definir la cadena de texto
const cadena = "¡hola!";
const longitud = cadena.length;

let contador = 0;
let texto;

texto = `La variable cadena contiene el siguiente texto: <b>${cadena}</b><br>`;
texto += `Su longitud es de ${longitud} caracteres distribuidos segun se indica en la siguiente tabla<br>`;

texto += `<table BORDER><tr><td>Posicion</td>`
for (var i = 0; i < longitud; i++) {
    texto += `<td>${i}</td>`;
}
texto += `</tr><tr><td>Contenido</td>`;
for (var i = 0; i < longitud; i++) {
    texto += `<td>${cadena[i]}</td>`;
}
texto += `</tr></table>`;

console.log(texto);
document.getElementById("textoEjercicio").innerHTML = texto;

