function abrirVentas() {
    const nVentanas = 5;
    for (let index = 0; index < nVentanas; index++) {
        var ventanaEmergente = window.open('', 'VentanaEmergente'+index, 'width=200,height=200');

        ventanaEmergente.document.write('<html><head><title>Bienvenido</title>');
        ventanaEmergente.document.write('<script src="Ejercicio10.js"></script></head><body>');
        ventanaEmergente.document.write('<button onclick="cerrarVentana()">Cerrar</button>');
        ventanaEmergente.document.write('</body></html>');
    }
}

function cerrarVentana() {
    window.close();
}