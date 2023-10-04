document.addEventListener("DOMContentLoaded", function() {
    const dniInput = document.getElementById("dni");
    const fechaInput = document.getElementById("fNacimiento");
    const nHijosInput = document.getElementById("nHijos");
    const emailInput = document.getElementById("email");
    const webInput = document.getElementById("web");
    const passInput = document.getElementById("pass");
    const formulario = document.getElementById("inscripcion");

    // Expresión regular para validar un DNI
    const dniRegex = /^[0-9]{8}[A-Za-z]$/;

    // Expresión regular para validar una fecha en formato dd/mm/aaaa (español)
    const fechaRegex = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/;

    // Expresión regular para validar un email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Expresión regular para validar una URL
    const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})(\/[a-zA-Z0-9%._-]*)*\/?$/;

    // Expresión regular para validar una contraseña (mínimo 8 caracteres)
    const passRegex = /^.{8,}$/;

    // Expresión regular para validar el número de hijos (0-10)
    const hijosRegex = /^([0-9]|10)$/;

    dniInput.addEventListener("blur", function() {
        if (!dniRegex.test(dniInput.value)) {
            dniInput.value = "";
        }
    });

    fechaInput.addEventListener("blur", function() {
        if (!fechaRegex.test(fechaInput.value)) {
            fechaInput.value = "";
        }
    });

    emailInput.addEventListener("blur", function() {
        if (!emailRegex.test(emailInput.value)) {
            emailInput.value = "";
        }
    });

    webInput.addEventListener("blur", function() {
        if (!urlRegex.test(webInput.value)) {
            webInput.value = "";
        }
    });

    passInput.addEventListener("blur", function() {
        if (!passRegex.test(passInput.value)) {
            passInput.value = "";
        }
    });

    nHijosInput.addEventListener("blur", function() {
        if (!hijosRegex.test(nHijosInput.value)) {
            nHijosInput.value = "";
        }
    });

    formulario.addEventListener("submit", function(event) {
        // Evitar el envío predeterminado del formulario
        event.preventDefault();

        // Validación final antes de enviar el formulario
        if (!dniRegex.test(dniInput.value)) {
            dniInput.value = "";
        }

        if (!fechaRegex.test(fechaInput.value)) {
            fechaInput.value = "";
        }

        if (!hijosRegex.test(nHijosInput.value)) {
            nHijosInput.value = "";
        }

        if (!emailRegex.test(emailInput.value)) {
            emailInput.value = "";
        }

        if (!urlRegex.test(webInput.value)) {
            webInput.value = "";
        }

        if (!passRegex.test(passInput.value)) {
            passInput.value = "";
        }

        formulario.reset();
    });
});
