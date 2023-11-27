let n = 0;
let vecesEjecutado = 0;
let nCaracterEnLinea = 0;
let texto = "<h1>Numeros pares de 25 en 25</h1>";
let continuar = true;

do {
    n++;

    if (n % 2 == 0){
        if (nCaracterEnLinea == 5) {
            texto += "<br>"+n+",";
            nCaracterEnLinea = 1;
        } else {
            texto += n+",";
            nCaracterEnLinea++;
        }

        if (vecesEjecutado == 25) {
            vecesEjecutado = 0;

            //Imprimimos en la pagina lo que llevamso de sumatorio
            console.log(texto);
            document.getElementById("textoEjercicio").innerHTML = texto;
    
            // Preguntamos al usuario si uiere continuar con otros 25
            continuar = confirm("¿Deseas continuar mostrando números pares de 25 en 25?");
        }
        vecesEjecutado++;
    }
} while (continuar);