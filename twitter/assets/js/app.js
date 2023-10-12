document.addEventListener("DOMContentLoaded", function () {
    let tweets = [];

    let formulario = document.getElementById("formulario");
    let tweetInput = document.getElementById("tweet");
    let divListaTweets = document.getElementById("lista-tweets");

    // Cargar tweets del localStorage
    if (localStorage.getItem("tweets")) {
        tweets = JSON.parse(localStorage.getItem("tweets"));
        renderTweets();
    }

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        let nuevoTweet = tweetInput.value;

        if (nuevoTweet.trim() !== "") {
            tweets.push(nuevoTweet);
            tweetInput.value = "";
            guardarTweetsEnLocalStorage();
            renderTweets();
        }
    });

    function guardarTweetsEnLocalStorage() {
        localStorage.setItem("tweets", JSON.stringify(tweets));
    }

    function renderTweets() {
        divListaTweets.innerHTML = "";
        ListaTweets = document.createElement("ul");


        for (let i = 0; i < tweets.length; i++) {
            let tweetElement = document.createElement("li");
            tweetElement.textContent = tweets[i];
            
            // Agrega un a con una (X) junto a cada tweet para eliminarlo.
            let deleteATweet = document.createElement("a");
            deleteATweet.textContent = "X";
            deleteATweet.setAttribute("data-index", i);
            deleteATweet.setAttribute("class", "borrar-tweet")

            deleteATweet.addEventListener("click", function () {
                let index = this.getAttribute("data-index");
                tweets.splice(index, 1);
                guardarTweetsEnLocalStorage();
                renderTweets();
            });

            tweetElement.appendChild(deleteATweet);
            ListaTweets.appendChild(tweetElement);
        }
        divListaTweets.appendChild(ListaTweets);
    }
});
