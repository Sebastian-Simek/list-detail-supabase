export function renderCats(cat) {
    
    const a = document.createElement('a');
    a.href = `./cat-detail/?id=${cat.id}`;

    const div = document.createElement('div');
    div.classList.add('cats');

    const h2 = document.createElement('h2');
    h2.textContent = cat.name;

    const img = document.createElement('img');
    img.src = cat.image;
    
    
    a.append(h2, img,);
    div.append(a);
    return div;
}

export function renderCatPage(cat) {
    
    const div = document.createElement('div');
    div.classList.add('cats');
    
    
    const h2 = document.createElement('h2');
    h2.textContent = cat.name;

    const img = document.createElement('img');
    img.src = `${cat.image}`;
    
    const p = document.createElement('p');
    p.textContent = `${cat.name} is ${cat.age} years old and has a cuteness factor of ${cat.cuteness}`;

    const p1 = document.createElement('p');
    p1.textContent = cat.extra;
    
    div.append(img, p, p1);
    return div;
}

export function renderCatPageIntro(cat) {
    const topDiv = document.createElement('div');
    topDiv.textContent = `A little more about ${cat.name}`;
    topDiv.classList.add('top-div');
    
    return topDiv;
}