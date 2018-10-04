


function initialize() {
    dbHelper.fetchCats((error, cats) => {
        if (error) {
            console.log(error);
        }
        else {
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
        ul.append(createCatHTML(cat));
    });
}


/**
 * Create cat HTML.
 */
createCatHTML = (cat) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'flex-item');

    const image = document.createElement('img');
    image.className = 'cat-img';
    image.alt = cat.nome
    image.src = dbHelper.imageUrlForCat(cat);

    const section = document.createElement('section');
    section.setAttribute('class', 'flex-container');

    const name = document.createElement('h2');
    name.setAttribute('id', 'nome');
    name.innerHTML = cat.nome;

    const texto = document.createElement('h2');
    texto.innerHTML = 'Clicks: ';

    const clicks = document.createElement('h2');
    clicks.setAttribute('id', 'Click');
    clicks.innerHTML = 0;

    li.append(image);
    li.append(section);
    section.append(name);
    section.append(texto);
    section.append(clicks);

    li.setAttribute('onclick', 'Click(this)');

    return li
}


let contador = 0;

function Click(e) {
    let section = e.children[1];
    let click = section.children[2];

    click.innerHTML++;

    let cat = document.getElementById('catPrincipal');
    let catAtual =  e.children[0];
    cat.className = 'cat-img';
    cat.alt = catAtual.alt
    cat.src = catAtual.src;
}

initialize();
