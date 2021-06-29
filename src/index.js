import * as aboutFile from './scripts/about.js';
import * as selectMaxChart from './scripts/max_chart.js';
import * as selectBBChart from './scripts/bb_chart.js';
import * as selectAMCChart from './scripts/amc_chart.js';
import * as selectNOKChart from './scripts/nok_chart.js';
// import "core-js";
// import "regenerator-runtime";

document.addEventListener('DOMContentLoaded', () => {
    aboutFile.addEventListeners();
    aboutFile.openModal();



    selectMaxChart.selectMaxChart(); 
    selectMaxChart.openMaxChart();
    selectBBChart.selectBBChart();
    selectBBChart.openBBChart();
    selectAMCChart.selectAMCChart();
    selectAMCChart.openAMCChart();
    selectNOKChart.selectNOKChart();
    selectNOKChart.openNOKChart();
})



