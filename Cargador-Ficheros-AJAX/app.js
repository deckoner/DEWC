window.onload = function () {
    document.getElementById("btnAceptar").addEventListener("click", traerDatos);
};

function traerDatos() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "marcadores.json", true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let datos = JSON.parse(this.responseText);
            let res = document.getElementById("res");
            res.innerHTML = "";

            datos.forEach((monumento) => {
                res.innerHTML += `
                    <tr>
                        <td>${monumento.city}</td>
                        <td>${monumento.description}</td>
                        <td>${monumento.ranking}</td>
                    </tr>`;
            });
        }
    };
}
