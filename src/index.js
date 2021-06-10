import * as aboutFile from './scripts/about.js';
import * as pricing from './scripts/max_chart.js'; 

document.addEventListener('DOMContentLoaded', () => {
    aboutFile.addEventListeners();
    aboutFile.openModal();
})