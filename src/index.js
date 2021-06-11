import * as aboutFile from './scripts/about.js';
import * as selectMaxChart from './scripts/max_chart.js';
// import "core-js";
// import "regenerator-runtime";

document.addEventListener('DOMContentLoaded', () => {
    aboutFile.addEventListeners();
    aboutFile.openModal();
    selectMaxChart.selectMaxChart(); 
})