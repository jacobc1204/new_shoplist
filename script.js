const endpoint = 'https://api.edamam.com/search?';
const submit = document.querySelector('#submit') || '';
const items = {};

function addToList(meal) {
    document.querySelector('#list').innerHTML += meal.ingredients.map(ing => {
        return `<li>${ing}</li>`;
    }).join('');
}

function parseData(data) {
    // console.log(data);
    const items = [];
    data.forEach(item => {
    // console.log(item.recipe);
        const info = {};
        info.name = item.recipe.label;
        info.calories = item.recipe.calories;
        info.image = item.recipe.image;
        info.ingredients = item.recipe.ingredientLines;
        info.dietLabels = item.recipe.dietLabels;
        info.url = item.recipe.url;
        items.push(info);
    });
    displayData(items);
}

function displayData(data) {
    document.querySelector('section').innerHTML = data.map((item) => {
        items[item.name] = {
            name: item.name,
            ingredients: item.ingredients,
            recipe: item.url
        };
        return `
      <div class="item">
        <img src="${item.image}" />
        <div class="overlay">
          <a href="${item.url}"><h2>${item.name}</h2></a>
          <p>${item.dietLabels.join(', ')} | ${Math.round(item.calories)} cal.</p>
          <button class="addBtn" id="${item.name}">Add to list</button>
        </div>
      </div>
    `;
    }).join('');
}

function search(query) {
    fetch(endpoint + `q=${query}&app_id=8fda32c8&app_key=b9e941727dbfb89e82a9b6e70eb84beb`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        parseData(data.hits);
        document.querySelectorAll('.addBtn').forEach(item => {
            item.addEventListener('click', (e) => {
                let name = e.target.id;
                addToList(items[name]);
            });
        });
    });
}

submit.addEventListener('click', () => {
    var query = document.querySelector('#query').value;
    if (query) {
        search(query);
        document.querySelector('#query').value = '';
        document.querySelector('#search_again').style.display = 'block';
    } else {
        query = prompt('What would you like to search for?');
        search(query);
        document.querySelector('#query').value = '';
        document.querySelector('#search_again').style.display = 'block';
    }
});

document.querySelector('#list_btn').addEventListener('click', () => {
    const list = document.querySelector('#list');
    list.style.display == 'block' ? list.style.display = 'none' : list.style.display = 'block';
})