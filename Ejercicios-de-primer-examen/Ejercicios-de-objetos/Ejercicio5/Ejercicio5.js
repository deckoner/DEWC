window.onload = function() {
    let inicio = new Date;
    let nombre = prompt("¡RAPIDO ESCRIBE TU NOMBRE!");
    let fin = new Date;

    nombre = `Nombre; ${nombre} has tardado: ${fin.getSeconds() - inicio.getSeconds()} Segundos`

    console.log(nombre);
    document.getElementById("texto").innerHTML = nombre;
}