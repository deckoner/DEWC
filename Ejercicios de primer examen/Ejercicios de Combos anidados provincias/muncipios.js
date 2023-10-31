let provincias = new Array("Araba", "Bizkaia", "Gipuzkoa", "Nafarroa", "Lapurdi", "Zuberoa", "Nafarroa Beherea")

let municipios_1 = new Array("Seleccione Municipio", "Vitoria-Gasteiz", "Amurrio", "El Ciego", "La Guardia");
let municipios_2 = new Array("Seleccione Municipio", "Bilbao", "Barakaldo", "Durango", "Elorrio", "Muzkiz");
let municipios_3 = new Array("Seleccione Municipio", "Donostia-San SebastiÃ¡n", "Arrasate-MondragÃ³n", "Eibar");
let municipios_4 = new Array("Seleccione Municipio", "IruÃ±a", "Burlada", "Estella-Lizarra", "Tafalla");
let municipios_5 = new Array("Seleccione Municipio", "Baiona", "Bastida", "Hendaya", "Miarritze");
let municipios_6 = new Array("Seleccione Municipio", "Maule", "Barkoxe", "SohÃ¼ta");
let municipios_7 = new Array("Seleccione Municipio", "Baigorri", "Garazi", "Oztibarre");

let todosMunicipios = [
    municipios_1,
    municipios_2,
    municipios_3,
    municipios_4,
    municipios_5,
    municipios_6,
    municipios_7,
];

function cambiaProvincia() {
    let cbMunicipio = document.getElementsByName("municipio")[0];
    let posicionProvincia = document.getElementsByName("provincia")[0].value;
    let municipios = todosMunicipios[parseInt(posicionProvincia)];

    limpiarComboBox(cbMunicipio);

    for (let i = 0; i < municipios.length; i++) {
        const option = document.createElement("option");
        option.value = i; // Usa la posición como el valor
        option.text = municipios[i]; // El texto visible de la opción
        cbMunicipio.appendChild(option); // Agrega la opción al elemento select
    }
}

function rellenarCBProvincias() {
    let cbProvincias = document.getElementsByName("provincia")[0];
    
    for (let i = 0; i < provincias.length; i++) {
        const option = document.createElement("option");
        option.value = i; // Usa la posición como el valor
        option.text = provincias[i]; // El texto visible de la opción
        cbProvincias.appendChild(option); // Agrega la opción al elemento select
    }
}

function limpiarComboBox(comboBox) {
    while (comboBox.options.length > 0) {
        comboBox.options.remove(0);
    }
}

function muestraDatos() {
    let provincia = parseInt(document.f1.provincia.value);
    let municipio = parseInt(document.f1.municipio.value);
    let listaMunicipio = todosMunicipios[provincia];

    if (municipio != 0) {
        document.getElementById("mensaje").innerHTML = "<p>Ha seleccionado <b>" + listaMunicipio[municipio] + "</b> en <b>" + provincias[provincia] + "</b>";
    } else {
        document.getElementById("mensaje").innerHTML = "";
    }
}

rellenarCBProvincias()
cambiaProvincia()