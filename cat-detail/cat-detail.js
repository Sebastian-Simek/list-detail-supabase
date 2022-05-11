import { getCat } from '../fetch-utils.js';
import { renderCatPage } from '../render-utils.js';

const catDetailContainer = document.querySelector('main');

async function loadData() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const cat = await getCat(id);
    const catDiv = renderCatPage(cat);
    catDetailContainer.append(catDiv);
}
loadData();