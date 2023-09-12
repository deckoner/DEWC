let nVeces = 25;
let nActual = 0;
let n = 0;
let finalizar = false
let texto = "<h1>Numeros pares de 25 en 25</h1><br>";

do {

    for (nActual = 0; nActual < nVeces; n++) {
        if (n % 2 == 0) {
            texto += n+","
        }
    }

    const continuar = confirm("¿Deseas mostrar más números pares de 25 en 25?");
    if (continuar) {
        finalizar = true;
    }

} while(finalizar);


Mismamente, la página de Google hace uso de esta tecnología, aunque es recomendarla hacerla tanto en el servidor, como cliente debido a políticas de ciberseguridad.


do {
    // Inicializamos un contador en 0 para comenzar desde 0
    let contador = 0;
  
    // Usamos un bucle do...while para mostrar números pares de 25 en 25
    do {
      if (contador % 2 === 0) {
        console.log(contador);
      }
      contador += 25;
    } while (contador <= 100); // Puedes ajustar el límite según tus necesidades
  
    // Preguntamos al usuario si desea continuar
    const continuar = confirm("¿Deseas mostrar más números pares de 25 en 25?");
  
  } while (continuar);
  
















console.log(texto);
document.getElementById("textoEjercicio").innerHTML = texto;