// app.js

document.addEventListener("DOMContentLoaded", function () {
  const agregarCarritoButtons = document.querySelectorAll(".agregar-carrito");
  agregarCarritoButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const cursoId = button.getAttribute("data-id");
      const cursoNombre = button.parentElement.querySelector("h4").textContent;
      const cursoImagen = button.parentElement.querySelector("img").src;
      const cursoPrecio = parseFloat(
        button.parentElement
          .querySelector(".precio > .u-pull-right")
          .textContent.replace("$", "")
      );

      // Obtener el carrito actual desde el Local Storage o crear uno vacío si no existe
      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

      if (carrito.find((curso) => curso.name === cursoNombre)) {
        cursoExistente.cantidad = (cursoExistente.cantidad || 0) + 1;

      } else {
        // Agregar el curso al carrito
        carrito.push({
          id: cursoId,
          name: cursoNombre,
          price: cursoPrecio,
          imagen: cursoImagen,
          cantidad: 1,
        });
      }

      // Guardar el carrito actualizado en el Local Storage
      localStorage.setItem("carrito", JSON.stringify(carrito));
    });
  });
});
