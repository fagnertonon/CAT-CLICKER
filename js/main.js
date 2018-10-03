


function initialize() {
    dbHelper.fetchCats((error, cats) => {
        if (error) {
                console.log(error);
        }
        else{
            self.cats = cats;
            fillCatsHTML();
        }
    })
}


/**
 * Create all restaurants HTML and add them to the webpage.
 */
fillCatsHTML = (Cats = self.cats) => {
    const ul = document.getElementById('cats-list');
    cats.forEach(cat => {
        ul.append(createRestaurantHTML(cat));
    });
    addMarkersToMap();
}


/**
 * Create cat HTML.
 */
createCatHTML = (cat) => {
    const li = document.createElement('li');

    const image = document.createElement('img');

    image.className = 'cat-img';
    image.src = DBHelper.imageUrlForCat(cat);
    li.append(image);

    const name = document.createElement('h1');
    name.innerHTML = cat.name;
    image.alt = cat.name
    li.append(name);

    return li
}


let contador = 0;

function Click(params) {
    let texto = document.getElementById('contagem');
    contador++;

    texto.textContent = `Imagem clicada: ${contador} vezes.`;
}

initialize();
