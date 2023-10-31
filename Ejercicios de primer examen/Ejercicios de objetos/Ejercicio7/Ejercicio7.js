// Definir la fecha de inicio (01/01/1990)
const fechaInicio = new Date('1990-01-01');
const fechaActual = new Date();
const diferenciaEnMilisegundos = fechaActual - fechaInicio;

// Calcular los componentes de la diferencia
const segundosTotales = Math.floor(diferenciaEnMilisegundos / 1000);
const dias = Math.floor(segundosTotales / 86400); // 1 día tiene 86400 segundos
const horas = Math.floor((segundosTotales % 86400) / 3600); // 1 hora tiene 3600 segundos
const minutos = Math.floor(((segundosTotales % 86400) % 3600) / 60); // 1 minuto tiene 60 segundos
const segundos = segundosTotales % 60;

let texto = `Desde el 01/01/1990 han transcurrido ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos.`;
// Imprimir el resultado
console.log(texto);
document.getElementById("textoEjercicio").innerHTML = texto;