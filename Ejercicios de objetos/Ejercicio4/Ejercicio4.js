window.onload = function() {

  screenInformacion();
  navigatorInformacion();
  documentInformacion();
  locationInformacion();
}

function screenInformacion() {
  let texto = `La resolucion de la pantalla es ${screen.width} x ${screen.height}`;

  console.log(texto);
  document.getElementById("screen").innerHTML = texto;
}

function navigatorInformacion() {
  let texto = `El nombre del navegador que usas es: <strong>${navigator.userAgent}</strong><br>
              Usas el siguiente sistema operativo: <strong>${navigator.platform}</strong><br>
              La version del navegador que usas es: <strong>${navigator.appVersion}</strong>`;

  console.log(texto);
  document.getElementById("navigator").innerHTML = texto;
}

function documentInformacion() {
  let texto = `La URL del documento es: <strong>${document.location}</strong>`;

  console.log(texto);
  document.getElementById("document").innerHTML = texto;
}

function locationInformacion() {
  let texto = `El protocolo usado para acceder a esta pagina ha sido: <strong>${location.protocol}</strong>`;

  console.log(texto);
  document.getElementById("location").innerHTML = texto;
}