import * as aboutFile from './scripts/about.js';
import * as selectMaxChart from './scripts/all_stock_chart.js';
import * as selectChart from './scripts/stock_chart.js';


document.addEventListener('DOMContentLoaded', () => {
    aboutFile.addEventListeners();
    aboutFile.openModal();

})

let allCharts = document.querySelectorAll(".chart-container .full-chart");

export const hideChart = () => {
    const chartcontainer = document.querySelector(".chart-container")
    allCharts.forEach((chart) => {
        chartcontainer.style.display = 'none';
        chart.style.display = "none";
    });
};


// let maxChart = document.getElementById("max-chart");
// selectMaxChart.selectMaxChart();
// maxChart.onclick = () => {
//     selectMaxChart.openMaxChart();
// };

let bbChart = document.getElementById("bb-chart-button");
let bb = "BB"
let bbbutton = ".blackberrybutton"
bbChart.onclick = () => {
    selectChart.openStockChart(bb, bbbutton);
};

let amcChart = document.getElementById("amc-chart-button");
let amc = "AMC"
let amcbutton = ".amcbutton"
amcChart.onclick = () => {
    selectChart.openStockChart(amc, amcbutton);
};

let nokChart = document.getElementById("nok-chart-button");
let nok = "NOK"
let nokbutton = ".nokbutton"
nokChart.onclick = () => {
    selectChart.openStockChart(nok, nokbutton);
};

let gmeChart = document.getElementById("gme-chart-button");
let gme = "GME"
let gmebutton = ".gmebutton"
gmeChart.onclick = () => {
    selectChart.openStockChart(gme, gmebutton);
};

let bbbyChart = document.getElementById("bbby-chart-button");
let bbby = "BBBY"
let bbbybutton = ".bbbybutton"
bbbyChart.onclick = () => {
    selectChart.openStockChart(bbby, bbbybutton);
};

document.querySelector(".navbar-logo").addEventListener("click", () => { 
    hideChart(); 
    window.location.reload();
});
