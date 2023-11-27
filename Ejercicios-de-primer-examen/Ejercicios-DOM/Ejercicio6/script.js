const rutas = ["images/0.jpg", 
                "images/1.jpg", 
                "images/2.jpg",
                "images/3.jpg",
                "images/4.jpg",
                "images/5.jpg",
                "images/6.jpg",
                "images/7.jpg",
                "images/8.jpg",
                "images/9.jpg"];

// Función para asignar imagen a un dígito
function asignarImagenADigito(digito, elementoImagen) {
  // Asegúrate de que el dígito sea un número válido
  if (!isNaN(digito)) {
    // Elige la imagen correspondiente del arreglo 'rutas'
    if (digito >= 0 && digito <= 9) {
      elementoImagen.src = rutas[digito];
    }
  }
}

// Función para actualizar el reloj
function actualizarReloj() {
  // Obtén la fecha y la hora actual
  let fechaHoraActual = new Date();

  // Obtiene los dígitos de la fecha y la hora
  var digitosDia = fechaHoraActual.getDate().toString().split("");
  var digitosMes = (fechaHoraActual.getMonth() + 1).toString().split(""); // Suma 1 al mes porque los meses se cuentan desde 0
  var digitosAnio = fechaHoraActual.getFullYear().toString().split("");
  var digitosHora = fechaHoraActual.getHours().toString().split("");
  var digitosMinuto = fechaHoraActual.getMinutes().toString().split("");
  var digitosSegundo = fechaHoraActual.getSeconds().toString().split("");

  // Asigna imágenes a los elementos de imagen correspondientes
  asignarImagenADigito(digitosDia[0], imagenDia1);
  asignarImagenADigito(digitosDia[1], imagenDia2);
  asignarImagenADigito(digitosMes[0], imagenMes1);
  asignarImagenADigito(digitosMes[1], imagenMes2);
  asignarImagenADigito(digitosAnio[0], imagenAnio1);
  asignarImagenADigito(digitosAnio[1], imagenAnio2);
  asignarImagenADigito(digitosAnio[2], imagenAnio3);
  asignarImagenADigito(digitosAnio[3], imagenAnio4);
  asignarImagenADigito(digitosHora[0], imagenHora1);
  asignarImagenADigito(digitosHora[1], imagenHora2);
  asignarImagenADigito(digitosMinuto[0], imagenMinuto1);
  asignarImagenADigito(digitosMinuto[1], imagenMinuto2);
  asignarImagenADigito(digitosSegundo[0], imagenSegundo1);
  asignarImagenADigito(digitosSegundo[1], imagenSegundo2);
}

// Dia
let imagenDia1 = document.getElementById("dia1");
let imagenDia2 = document.getElementById("dia2");

// Mes
let imagenMes1 = document.getElementById("mes1");
let imagenMes2 = document.getElementById("mes2");

// Año
let imagenAnio1 = document.getElementById("anio1");
let imagenAnio2 = document.getElementById("anio2");
let imagenAnio3 = document.getElementById("anio3");
let imagenAnio4 = document.getElementById("anio4");

// horas
let imagenHora1 = document.getElementById("hora1");
let imagenHora2 = document.getElementById("hora2");

// Minutos
let imagenMinuto1 = document.getElementById("minuto1");
let imagenMinuto2 = document.getElementById("minuto2");

// Segundos
let imagenSegundo1 = document.getElementById("segundo1");
let imagenSegundo2 = document.getElementById("segundo2");

// Llama a la función para actualizar el reloj inicialmente
actualizarReloj();

// Cada medio segundo actualizaremos la hora
setInterval(actualizarReloj, 1000);