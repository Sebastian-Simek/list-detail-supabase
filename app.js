// import functions and grab DOM elements
import { getCats } from './fetch-utils.js';
import { renderCats } from './render-utils.js';

const catListContainer = document.querySelector('main');

async function loadData() {
    const cats = await getCats();

    for (let cat of cats) {
        const catDiv = renderCats(cat);
        catListContainer.append(catDiv);
    }
}
loadData();

