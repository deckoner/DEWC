function calcularEdad(fechaNacimiento) {
  let hoy = new Date();
  let cumpleanos = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - cumpleanos.getFullYear();

  // Verificar si el cumpleaños
  if (
    hoy.getMonth() < cumpleanos.getMonth() ||
    (hoy.getMonth() === cumpleanos.getMonth() &&
      hoy.getDate() < cumpleanos.getDate())
  ) {
    edad--;
  }

  return edad;
}

// Pedir la fecha de nacimiento al usuario
let texto;
let fechaStr;
let fechaNacimiento;
let valido = false;

do {
  fechaStr = prompt("Ingrese su fecha de nacimiento (aaaa/mm/dd):");

  // Dividir la cadena en sus componentes (año, mes y día)
  let partesFecha = fechaStr.split("/");
  let anio = parseInt(partesFecha[0]);

  // Restamos 1 por que los meses van de 0 a 11
  let mes = parseInt(partesFecha[1]) - 1;
  let dia = parseInt(partesFecha[2]);

  // Convertir los datos en una fecha con Date
  fechaNacimiento = new Date(anio, mes, dia);

  console.log(fechaNacimiento);

  if (!isNaN(fechaNacimiento)) {
    // 1998/07/20
    valido = true;
  }

} while (!valido);

//Escribimos en la pagina la informacion
texto = `Has nacido el ${fechaNacimiento.getDate()}/${
  fechaNacimiento.getMonth() + 1
}/${fechaNacimiento.getFullYear()}<br>`;
texto += `Tienes ${calcularEdad(fechaNacimiento)} años.`;

console.log(texto);
document.getElementById("textoEjercicio").innerHTML = texto;
