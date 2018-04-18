const endpoint = 'https://api.edamam.com/search?';

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
        items.push(info);
    });
    displayData(items);
}

function displayData(data) {
    document.querySelector('section').innerHTML = data.map((item) => {
        return `
      <div class="item" data-ingredients="${item.ingredients}">
        <img src="${item.image}" />
        <div class="overlay">
          <h2>${item.name}</h2>
          <p>${item.dietLabels.join(', ')} | ${Math.round(item.calories)} cal.</p>
        </div>
      </div>
    `;
    }).join('');
}

fetch(endpoint + 'q=chicken&app_id=8fda32c8&app_key=b9e941727dbfb89e82a9b6e70eb84beb')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
    // console.log(data);
        parseData(data.hits);
    });