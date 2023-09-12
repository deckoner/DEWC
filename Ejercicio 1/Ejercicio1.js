let nombre = prompt("Nombre","Brian");
let apelldio = prompt("Primer apellido","Escobar");
let apellidoDos = prompt("Segundo apellido","Rubio");

let texto = `<h1>¿Quien eres tu?</h1><br>
Nombre: ${nombre}<br><br>
Primer Apellido: ${apelldio}<br><br>
Segundo Apellido: ${apellidoDos}<br><br>
<b>${nombre} ${apelldio} ${apellidoDos}</b>`;

console.log(texto);
document.getElementById("textoEjercicio").innerHTML = texto;