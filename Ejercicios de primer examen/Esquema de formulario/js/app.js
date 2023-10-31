document.addEventListener("DOMContentLoaded", function () {
    // Obtener la URL de la página actual
    const url = window.location.href;

    // Verificar si la página actual es 'index.html'
    if (url.endsWith("index.html")) {
        const dniInput = document.getElementById("dni");
        const nombreInput = document.getElementById("firstname");
        const apellidosInput = document.getElementById("lastname");
        const direccionInput = document.getElementById("address");
        const territorioSelect = document.getElementById("territorio");
        const provinciasSelect = document.getElementById("provincia");
        const municipioSelect = document.getElementById("municipio");
        const cumpleaniosInput = document.getElementById("birthday");
        const emailInput = document.getElementById("email");
        const telefonoInput = document.getElementById("phone");
        const politicasCheckbox = document.getElementById("politicas");
        const submitButton = document.getElementById("enviar");

        // Definir municipios para cada provincia
        const municipiosPorProvincia = [
            ["Gasteiz", "Laguardia", "Salvatierra"],
            ["Bilbo", "Barakaldo", "Durango"],
            ["Donosti", "Arrasate", "Bergara"],
            ["Iruña", "Lizarra", "Ujue"],
            ["Baiona", "Biarritz", "Hendaya"],
            ["Bidarray", "St-Palais"],
            ["Maule", "Etxarri"],
        ];

        // Función para validar DNI
        function validarDNI(dni) {
            const dniRegex = /^[0-9]{8}[A-Z]$/;
            return dniRegex.test(dni);
        }

        // Función para validar longitud de texto con solo letras
        function validarCampoTexto(input, maxLength) {
            const valor = input.value.trim();
            const textoRegex = /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/; // Expresión regular para texto con espacios y letras acentuadas

            if (
                textoRegex.test(valor) &&
                valor.length > 0 &&
                valor.length <= maxLength
            ) {
                return true;
            } else {
                return false;
            }
        }

        // Función para validar longitud de texto
        // C/ laguna direccion nº 4, ª izqui
        // C/ laguna direccion, 4, ª izqui
        function validarCampoDireccion(input, maxLength) {
            const valor = input.value.trim();
            const direccionRegex = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s\d,ºª/]+$/u;

            if (
                direccionRegex.test(valor) &&
                valor.length > 0 &&
                valor.length <= maxLength
            ) {
                return true;
            } else {
                return false;
            }
        }

        // Función para validar email
        function validarEmail(email) {
            const emailRegex =
                /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            return emailRegex.test(email);
        }

        // Función para validar número de teléfono
        function validarTelefono(telefono) {
            // Expresión regular que permite los formatos de teléfono especificados
            const telefonoRegex = /^(\+\s?[0-9]{11}|\d{9})$/;
            return telefonoRegex.test(telefono);
        }

        // Funcion para calcular la edad
        function calcularEdad() {
            const fechaNacimiento = new Date(cumpleaniosInput.value);
            const fechaActual = new Date();
            const diferenciaAnios =
                fechaActual.getFullYear() - fechaNacimiento.getFullYear();

            // Verificar si aún no se ha cumplido el cumpleaños de este año
            if (
                fechaActual.getMonth() < fechaNacimiento.getMonth() ||
                (fechaActual.getMonth() === fechaNacimiento.getMonth() &&
                    fechaActual.getDate() < fechaNacimiento.getDate())
            ) {
                return diferenciaAnios - 1; // Restar 1 si el cumpleaños de este año aún no se ha cumplido
            } else {
                return diferenciaAnios;
            }
        }

        // Función para guardar la información en el localStorage
        function guardarInformacion() {
            const informacion = {
                direccion: direccionInput.value,
                dni: dniInput.value,
                email: emailInput.value,
                fnaci: cumpleaniosInput.value,
                fname: nombreInput.value,
                lname: apellidosInput.value,
                municipality:
                    municipioSelect.options[municipioSelect.selectedIndex].text,
                phone: telefonoInput.value,
                province:
                    provinciasSelect.options[provinciasSelect.selectedIndex]
                        .text,
                years: calcularEdad(),
                territorio: territorioSelect.value, // Como no tenía nombre en la imagen del examen, lo puse así
            };

            // Guardar la información en el localStorage
            localStorage.setItem(informacion.dni, JSON.stringify(informacion));
        }

        // Funciones para controlar los comboboxes
        // Provincias
        function actualizarProvincias() {
            const territorioSeleccionado = territorioSelect.value;
            const opcionesProvincias = {
                euskadi: ["Araba", "Bizkaia", "Gipuzkoa"],
                nafarroa: ["Navarra"],
                iparralde: ["Lapurdi", "Behe Nafarroa", "Zuberoa"],
            };
            const provincias = opcionesProvincias[territorioSeleccionado] || [];

            provinciasSelect.innerHTML =
                '<option value="0">Seleccione Provincia</option>';
            municipioSelect.innerHTML =
                '<option value="0">Seleccione Municipio</option>'; // Limpiar la lista de municipios

            provincias.forEach((provincia, index) => {
                const option = document.createElement("option");
                option.value = index + 1;
                option.textContent = provincia;
                provinciasSelect.appendChild(option);
            });
        }

        // Municipios
        function actualizarMunicipios() {
            const indiceProvinciaSeleccionada =
                parseInt(provinciasSelect.value) - 1;
            const municipios =
                municipiosPorProvincia[indiceProvinciaSeleccionada] || [];

            municipioSelect.innerHTML =
                '<option value="0">Seleccione Municipio</option>';

            municipios.forEach((municipio, index) => {
                const option = document.createElement("option");
                option.value = index + 1;
                option.textContent = municipio;
                municipioSelect.appendChild(option);
            });
        }

        // Event listeners
        territorioSelect.addEventListener("change", actualizarProvincias);
        provinciasSelect.addEventListener("change", actualizarMunicipios);
        politicasCheckbox.addEventListener("change", function () {
            if (politicasCheckbox.checked) {
                submitButton.removeAttribute("disabled");
            } else {
                submitButton.setAttribute("disabled", "disabled");
            }
        });

        // Inicializar municipios
        actualizarProvincias();
        actualizarMunicipios();

        // Agregar eventos de "blur" a los campos de entrada
        dniInput.addEventListener("blur", function () {
            if (!validarDNI(dniInput.value)) {
                dniInput.value = "";
                alert("El formato del DNI es incorrecto");
            }
        });

        nombreInput.addEventListener("blur", function () {
            if (!validarCampoTexto(nombreInput, 50)) {
                nombreInput.value = "";
                alert(
                    "El nombre es demasiado largo, está vacío o tiene números"
                );
            }
        });

        apellidosInput.addEventListener("blur", function () {
            if (!validarCampoTexto(apellidosInput, 50)) {
                apellidosInput.value = "";
                alert(
                    "Los apellidos son demasiado largos, están vacíos o tienen números"
                );
            }
        });

        direccionInput.addEventListener("blur", function () {
            if (!validarCampoDireccion(direccionInput, 50)) {
                direccionInput.value = "";
                alert("La dirección es demasiado larga o está vacía");
            }
        });

        emailInput.addEventListener("blur", function () {
            if (!validarEmail(emailInput.value)) {
                emailInput.value = "";
                alert("La dirección de correo electrónico no es válida");
            }
        });

        telefonoInput.addEventListener("blur", function () {
            if (!validarTelefono(telefonoInput.value)) {
                telefonoInput.value = "";
                alert("El número de teléfono no es válido");
            }
        });

        submitButton.addEventListener("click", function () {
            const territorioSelect = document.getElementById("territorio");
            const provinciasSelect = document.getElementById("provincia");
            const municipioSelect = document.getElementById("municipio");

            console.log(
                territorioSelect.value,
                provinciasSelect.value,
                municipioSelect.value
            );

            if (
                territorioSelect.value == 0 ||
                provinciasSelect.value == 0 ||
                municipioSelect.value == 0
            ) {
                alert(
                    "Por favor, selecciona un valor para territorio, provincia y municipio."
                );
            } else {
                // Guardar la información en el localStorage
                guardarInformacion();

                // Redirigir a "thankyou.html"
                window.location.href = "thankyou.html";
            }
        });
    } else {
        const volverButton = document.getElementById("volver");
        if (volverButton) {
            volverButton.addEventListener("click", function () {
                // Redirigir a "index.html"
                window.location.href = "index.html";
            });
        }
    }
});
