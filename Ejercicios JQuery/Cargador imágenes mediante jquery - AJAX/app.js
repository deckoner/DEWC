$(document).ready(function() {
    // Encuentra las celdas que contienen el nombre del país y añade la imagen correspondiente
    $("td:contains('España')").siblings().last().html('<img src="img/es.png" alt="Bandera de España">');
    $("td:contains('Francia')").siblings().last().html('<img src="img/fr.png" alt="Bandera de Francia">');
    $("td:contains('Italia')").siblings().last().html('<img src="img/it.png" alt="Bandera de Italia">');
    $("td:contains('Portugal')").siblings().last().html('<img src="img/pt.png" alt="Bandera de Portugal">');
    $("td:contains('Reino Unido')").siblings().last().html('<img src="img/gb.png" alt="Bandera de Reino Unido">');
});
