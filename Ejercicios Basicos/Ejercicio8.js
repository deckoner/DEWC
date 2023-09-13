const numero = parseInt(prompt("Ingresa un número entero para calcular su factorial:"));

// Verificamos si el número ingresado es un entero positivo
if (numero >= 0) {
  let factorial = 1;

  // Calculamos el factorial utilizando un bucle for
  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }

  alert(`El factorial de ${numero} es ${factorial}`);
} else {
  alert("Ingresa un número entero positivo.");
}
