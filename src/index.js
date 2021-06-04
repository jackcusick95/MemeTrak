import * as aboutFile from './scripts/about.js';
import * as pricing from './scripts/pricing.js'; 

document.addEventListener('DOMContentLoaded', () => {
    aboutFile.addEventListeners();
    aboutFile.openModal();
    // pricing.gotData(data); 
})