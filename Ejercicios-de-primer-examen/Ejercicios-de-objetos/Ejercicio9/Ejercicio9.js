function mostrarVentanaEmergente() {
    var nombre = document.getElementById('nombreApellido').value;

    if (!isNaN(nombre)) {
        alert('Por favor, completa el campos de nombre y apellidos.');
    } else {
        // Abrir ventana emergente en el centro de la pantalla
        var ventanaEmergente = window.open('', 'VentanaBienvenida', 'width=300,height=300,top=' + (screen.height / 2 - 150) + ',left=' + (screen.width / 2 - 150));
        
        // Contenido de la ventana emergente
        ventanaEmergente.document.write('<html><head><title>Bienvenido</title>');
        ventanaEmergente.document.write('<script src="Ejercicio9.js"></script></head><body>');
        ventanaEmergente.document.write(`<p>Bienvenido ${nombre}</p>`);
        ventanaEmergente.document.write('<button onclick="cerrarVentana()">Empezar a navegar</button>');
        ventanaEmergente.document.write('</body></html>');
    }
}

function cerrarVentana() {
    window.opener.location.href = 'https://www.google.com/';
    window.close();
}