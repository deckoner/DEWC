const resultado = document.getElementById("resultado");

function fethTxT() {
    // limpiamos resultados
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }

    fetch("datos.txt")
        .then((response) => response.text())
        .then((data) => {
            const articulo = document.createElement("article");
            const p = document.createElement("p");

            p.textContent = data;

            articulo.appendChild(p);
            resultado.appendChild(articulo);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

function fethJson() {
    // limpiamos resultados
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }

    fetch("empleados.json")
        .then((response) => response.json())
        .then((data) => {
            data.forEach(element => {
                const articulo = document.createElement("article");
                const h2 = document.createElement("h2");
                const p = document.createElement("p");

                h2.textContent = element.nombre;
                p.textContent = element.puesto;

                articulo.appendChild(h2);
                articulo.appendChild(p);

                resultado.appendChild(articulo);
            });
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

function fethAPI() {
    // limpiamos resultados
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }

    fetch("https://picsum.photos/list")
        .then((response) => response.json())
        .then((data) => {
            data.forEach(element => {
                const articulo = document.createElement("article");
                const p = document.createElement("p");
                const h2 = document.createElement("h2");
                const a = document.createElement("a");

                h2.textContent = element.filename;
                p.textContent = "Autor: "+element.author;
                a.href = element.post_url;
                a.textContent = "Post de la foto";

                articulo.appendChild(h2);
                articulo.appendChild(p);
                articulo.appendChild(a);

                resultado.appendChild(articulo);
            });
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}
