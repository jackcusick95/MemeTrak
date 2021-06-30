import * as aboutFile from './scripts/about.js';
import * as selectMaxChart from './scripts/max_chart.js';
import * as selectChart from './scripts/bb_chart.js';


document.addEventListener('DOMContentLoaded', () => {
    aboutFile.addEventListeners();
    aboutFile.openModal();

})


// selectMaxChart.selectMaxChart();

let allCharts = document.querySelectorAll(".chart-container .full-chart");

export const hideChart = () => {
    const chartcontainer = document.querySelector(".chart-container")
    allCharts.forEach((chart) => {
        chartcontainer.style.display = 'none';
        chart.style.display = "none";
    });
};


// let maxChart = document.getElementById("max-chart");
// maxChart.onclick = () => {
//     selectMaxChart.openMaxChart();
// };

let bbChart = document.getElementById("bb-chart-button");
let bb = "BB"
let bbbutton = ".blackberrybutton"
selectChart.loadStockChart(bb);
bbChart.onclick = () => {
    selectChart.openStockChart(bbbutton);
};

let amcChart = document.getElementById("amc-chart-button");
let amc = "AMC"
let amcbutton = ".amcbutton"
selectChart.loadStockChart(amc);
amcChart.onclick = () => {
    selectChart.openStockChart(amcbutton);
};

let nokChart = document.getElementById("nok-chart-button");
let nok = "NOK"
let nokbutton = ".nokbutton"
selectChart.loadStockChart(nok);
nokChart.onclick = () => {
    selectChart.openStockChart(nokbutton);
};

let gmeChart = document.getElementById("gme-chart-button");
let gme = "GME"
let gmebutton = ".gmebutton"
selectChart.loadStockChart(gme);
gmeChart.onclick = () => {
    selectChart.openStockChart(gmebutton);
};

let bbbyChart = document.getElementById("bbby-chart-button");
let bbby = "BBBY"
let bbbybutton = ".bbbybutton"
selectChart.loadStockChart(bbby);
bbbyChart.onclick = () => {
    selectChart.openStockChart(bbbybutton);
};


// let amcChart = document.getElementById("bb-chart");
// let amc = "AMC"
// let button = ".amcbutton"
// selectBBChart.selectBBChart(amc);
// amcChart.onclick = () => {
//     selectBBChart.openBBChart();
// };

// let nokChart = document.getElementById("nok-chart");
// nokChart.onclick = () => {
//     selectNOKChart.selectNOKChart();
// };

document.querySelector(".navbar-logo").addEventListener("click", () => { 
    hideChart(); 
    window.location.reload();
});
