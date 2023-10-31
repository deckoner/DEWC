// Función para mostrar mensajes
function mostrarMensaje(mensaje, tipo) {
    const div = document.createElement('div');
    
    if (tipo === 'error') {
        div.classList.add('mensaje', 'error');
    } else {
        div.classList.add('mensaje', 'correcto');
    }
    
    div.innerHTML = `${mensaje}`;
    formulario.insertBefore(div, document.querySelector('.form-group'));
    
    setTimeout(function() {
        document.querySelector('.mensaje').remove();
    }, 5000);
}

// Función para mostrar resultados
function mostrarResultado(seguro, total) {
    const resultado = document.getElementById('resultado');
    let marca;
    
    switch (seguro.marca) {
        case '1':
            marca = 'Americano';
            break;
        case '2':
            marca = 'Asiático';
            break;
        case '3':
            marca = 'Europeo';
            break;
    }
    
    const div = document.createElement('div');
    div.innerHTML = `
        <p class='header'>Tu Resumen: </p>
        <p>Marca: ${marca} </p>
        <p>Año: ${seguro.anio} </p>
        <p>Tipo: ${seguro.tipo} </p>
        <p>Total: $ ${total} </p>
    `;
    
    const spinner = document.querySelector('#cargando img');
    spinner.style.display = 'block';
    
    setTimeout(function() {
        spinner.style.display = 'none';
        resultado.appendChild(div);
    }, 3000);
}

// Función para cotizar el seguro
function cotizarSeguro(marca, anio, tipo) {
    const base = 2000;
    let cantidad;
    
    switch (marca) {
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
    }
    
    const diferencia = new Date().getFullYear() - anio;
    cantidad -= ((diferencia * 3) * cantidad) / 100;
    
    if (tipo === 'basico') {
        cantidad *= 1.30;
    } else {
        cantidad *= 1.50;
    }
    
    return cantidad;
}

// EventListener
const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;

    const anio = document.getElementById('anio');
    const anioSeleccionado = anio.options[anio.selectedIndex].value;

    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if (marcaSeleccionada === '' || anioSeleccionado === '' || tipo === '') {
        mostrarMensaje('Faltan datos, revisa el formulario y prueba de nuevo', 'error');
    } else {
        const resultados = document.querySelector('#resultado div');
        if (resultados != null) {
            resultados.remove();
        }

        const cantidad = cotizarSeguro(marcaSeleccionada, anioSeleccionado, tipo);
        mostrarResultado({ marca: marcaSeleccionada, anio: anioSeleccionado, tipo }, cantidad);
        mostrarMensaje('Cotizando...', 'exito');
    }
});

const max = new Date().getFullYear();
const min = max - 25;
const selectAnios = document.getElementById('anio');

for (let i = max; i > min; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectAnios.appendChild(option);
}