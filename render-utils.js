export function renderCats(cat) {
    
    const div = document.createElement('div');
    div.classList.add('cats');

    const h2 = document.createElement('h2');
    h2.textContent = cat.name;

    const img = document.createElement('img');
    img.src = cat.image;
    
    const p = document.createElement('p');
    p.textContent = `${cat.name} is ${cat.age} years old and has a cuteness factor of ${cat.cuteness}`;
    
    div.append(h2, img, p);
    return div;
}