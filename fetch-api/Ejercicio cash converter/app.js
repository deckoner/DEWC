function convert() {
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    let amount = document.getElementById('amount').value;
    let result = document.getElementById('result');

    let url = 'https://v6.exchangerate-api.com/v6/38da17b245d5d35f0ec20d60/latest/' + from;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let rate = data.conversion_rates[to];
            result.innerText = amount + ' ' + from + ' = ' + (amount * rate).toFixed(2) + ' ' + to;
        })
        .catch(err => console.log(err));
}