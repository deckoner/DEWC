document.addEventListener("DOMContentLoaded", function () {
  const agregarCarritoButtons = document.querySelectorAll(".agregar-carrito");

  agregarCarritoButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const cursoId = button.getAttribute("data-id");
      const cursoNombre = button.parentElement.querySelector("h4").textContent;
      const cursoImagen = button.parentElement.parentElement.querySelector(".imagen-curso.u-full-width").src;
      const cursoPrecio = parseFloat(
        button.parentElement
          .querySelector(".precio > .u-pull-right")
          .textContent.replace("$", "")
      );

      // Obtener el carrito actual desde el Local Storage o crear uno vacío si no existe
      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

      let cursoExistente = carrito.find((curso) => curso.name === cursoNombre);

      if (cursoExistente) {
        cursoExistente.cantidad = cursoExistente.cantidad + 1;
      } else {
        carrito.push({
          id: cursoId,
          nombre: cursoNombre,
          precio: cursoPrecio,
          imagen: cursoImagen,
          cantidad: 1,
        });
      }

      // Guardar el carrito actualizado en el Local Storage
      localStorage.setItem("carrito", JSON.stringify(carrito));

      // Actualizar el carrito
      actualizarTabla(carrito);
    });
  });
});

function actualizarTabla(objeto) {
  // Obtén la referencia a la tabla
  let tabla = document.getElementById('lista-carrito');

  // Obtén la referencia al cuerpo de la tabla
  let tbody = tabla.getElementsByTagName('tbody')[0];

  // Limpia el cuerpo de la tabla
  tbody.innerHTML = '';

  // Itera sobre cada propiedad del objeto
  for (let propiedad in objeto) {
    // Busca si el objeto ya existe en la tabla
    let filaExistente = Array.from(tbody.getElementsByTagName('tr')).find(fila => fila.children[1].textContent === objeto[propiedad].nombre);

    if (filaExistente) {
      // Si el objeto ya existe en la tabla, actualiza la cantidad
      filaExistente.children[3].textContent = objeto[propiedad].cantidad;
    } else {
      // Si el objeto no existe en la tabla, crea una nueva fila
      let fila = document.createElement('tr');

      // Crea una celda para cada propiedad del objeto
      let celdaImagen = document.createElement('td');
      let celdaNombre = document.createElement('td');
      let celdaPrecio = document.createElement('td');
      let celdaCantidad = document.createElement('td');

      // Asigna el valor de la propiedad a la celda
      celdaImagen.innerHTML = '<img style="width: 10em;" src="'+objeto[propiedad].imagen+'"</a>';
      celdaNombre.innerHTML = objeto[propiedad].nombre;
      celdaPrecio.innerHTML = objeto[propiedad].precio + "€";
      celdaCantidad.innerHTML = objeto[propiedad].cantidad;

      // Añade las celdas a la fila
      fila.appendChild(celdaImagen);
      fila.appendChild(celdaNombre);
      fila.appendChild(celdaPrecio);
      fila.appendChild(celdaCantidad);

      // Añade la fila al cuerpo de la tabla
      tbody.appendChild(fila);
    }
  }
}

// Vaciar carrito
let botonVaciarCarrito = document.getElementById('vaciar-carrito');
botonVaciarCarrito.addEventListener("click", function(){ 
  // Limpiamos el local storage de la pagina
  localStorage.removeItem("carrito");

  // Obtén la referencia a la tabla
  let tabla = document.getElementById('lista-carrito');

  // Obtén la referencia al cuerpo de la tabla
  let tbody = tabla.getElementsByTagName('tbody')[0];

  // Limpia el cuerpo de la tabla
  tbody.innerHTML = '';
});