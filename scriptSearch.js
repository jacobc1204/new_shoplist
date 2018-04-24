const endpoint = 'https://api.edamam.com/search?';
const query = document.querySelector('#query');
const submit = document.querySelector('#submit');

function search() {
    fetch(endpoint + `q=${query}&app_id=8fda32c8&app_key=b9e941727dbfb89e82a9b6e70eb84beb`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
    // console.log(data);
        parseData(data.hits);
    });
}

submit.addEventListener('click', (e) => {
    e.preventDefault();
    search();
})