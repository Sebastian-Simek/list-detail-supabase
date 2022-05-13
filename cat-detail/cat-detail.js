import { getCat } from '../fetch-utils.js';
import { renderCatPage, renderCatPageIntro } from '../render-utils.js';

const catDetailContainer = document.querySelector('main');

async function loadData() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const cat = await getCat(id);
    const topDiv = renderCatPageIntro(cat);
    const catDiv = renderCatPage(cat);
    catDetailContainer.append(topDiv, catDiv);
}
loadData();