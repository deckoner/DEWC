// Variables para el estado del juego
let jugadorActual = "j1";
const cuadros = document.querySelectorAll("td");
const matrizJuego = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

// Función para manejar el clic en un cuadro
function manejarClic(event) {
    const cuadro = event.currentTarget.querySelector("p");
  
    // Verifica si el cuadro ya está ocupado
    if (cuadro.textContent === "X" || cuadro.textContent === "O") {
      return;
    }
  
    // Coloca el símbolo y cambia el jugador
    cuadro.textContent = jugadorActual === "j1" ? "X" : "O";
    cuadro.classList.add(jugadorActual);
  
    // Actualizar la matriz del juego
    actualizarMatriz();
    console.log(matrizJuego);
  
    // Verificar si alguien ganó
    if (verificarGanador()) {
      console.log(`¡El jugador ${jugadorActual === "j1" ? "1" : "2"} ha ganado!`);
      reiniciarJuego();
    } else {
      // Cambiar el turno después de verificar el ganador
      jugadorActual = jugadorActual === "j1" ? "j2" : "j1";
  
      // Actualizar el título del turno del jugador
      actualizarTituloTurno();
    }
  }

// Función para verificar si hay un ganador
function verificarGanador() {
  // Verificar filas y columnas
  for (let i = 0; i < 3; i++) {
    // Verificar filas
    if (
      matrizJuego[i][0] === jugadorActual &&
      matrizJuego[i][1] === jugadorActual &&
      matrizJuego[i][2] === jugadorActual
    ) {
      return true;
    }

    // Verificar columnas
    if (
      matrizJuego[0][i] === jugadorActual &&
      matrizJuego[1][i] === jugadorActual &&
      matrizJuego[2][i] === jugadorActual
    ) {
      return true;
    }
  }

  return false;
}

// Función para actualizar la matriz del juego
function actualizarMatriz() {
    for (let fila = 0; fila < 3; fila++) {
      for (let columna = 0; columna < 3; columna++) {
        const cuadro = cuadros[fila * 3 + columna];
        const cuadroP = cuadro.querySelector("p");
  
        if (cuadroP.classList.contains("j1")) {
          matrizJuego[fila][columna] = "j1";
        } else if (cuadroP.classList.contains("j2")) {
          matrizJuego[fila][columna] = "j2";
        } else {
          matrizJuego[fila][columna] = ""; // Cuadro en blanco si no tiene clase
        }
      }
    }
  }
  
// Agrega el evento de clic a cada cuadro
cuadros.forEach((cuadro) => {
  cuadro.addEventListener("click", manejarClic);
});

// Función para actualizar el título del turno del jugador
function actualizarTituloTurno() {
  const tituloTurno = document.getElementById("turnoJugador");

  if (jugadorActual === "j1") {
    tituloTurno.textContent = "Turno del jugador 1";
    tituloTurno.classList.remove("j2");
    tituloTurno.classList.add("j1");
  } else {
    tituloTurno.textContent = "Turno del jugador 2";
    tituloTurno.classList.remove("j1");
    tituloTurno.classList.add("j2");
  }
}

// Función para reiniciar el juego
function reiniciarJuego() {
  cuadros.forEach((cuadro) => {
    cuadro.querySelector("p").textContent = ""; // Limpia el contenido de los cuadros
  });
  jugadorActual = "j1";
}
