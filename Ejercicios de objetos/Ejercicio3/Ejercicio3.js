function cambiarFondo(boton) {
    // Obtén el texto del botón que desencadenó el evento
    var textoBoton = boton.textContent.toLowerCase();
    
    // Determina el color y cambia el fondo de la página
    switch (textoBoton) {
      case 'rojo':
        document.body.style.backgroundColor = 'red';
        break;
      case 'verde':
        document.body.style.backgroundColor = 'green';
        break;
      case 'azul':
        document.body.style.backgroundColor = 'blue';
        break;
      case 'morado':
        document.body.style.backgroundColor = 'purple';
        break;
      case 'rosa':
        document.body.style.backgroundColor = 'pink';
        break;
      default:
        break;
    }
}