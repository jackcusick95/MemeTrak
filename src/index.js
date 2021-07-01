import * as aboutFile from './scripts/navbar.js';
import * as selectChart from './scripts/stock_chart.js';


document.addEventListener('DOMContentLoaded', () => {
    aboutFile.addEventListeners();
    aboutFile.openModal();

})


const chartcontainer = document.querySelector(".chart-container")
const stockcontainer = document.querySelector(".stock-chart")
chartcontainer.style.display = "none";
stockcontainer.style.display = "none";


let maxChart = document.getElementById("max-chart-button");
let stocks = "BB, AMC, GME, NOK, BBBY"
maxChart.onclick = () => {
    selectMaxChart.openMaxChart(stocks);
};

// // week
// let bbChart = document.getElementById("bb-chart-button");
// let bb = "BB"
// let bbinterval = "1h"
// let bboutput = "35"
// bbChart.onclick = () => {
//     selectChart.openStockChart(bb, bbinterval, bboutput);
// };

// // month
// let bbChart = document.getElementById("bb-chart-button");
// let bb = "BB"
// let bbinterval = "1h"
// let bboutput = "155"
// bbChart.onclick = () => {
//     selectChart.openStockChart(bb, bbinterval, bboutput);
// };

// // year
// let bbChart = document.getElementById("bb-chart-button");
// let bb = "BB"
// let bbinterval = "1day"
// let bboutput = "254"
// bbChart.onclick = () => {
//     selectChart.openStockChart(bb, bbinterval, bboutput);
// };

// let weekChart = document.getElementById("tab-btn-3");
// let bb = "BB"
// let bbinterval = "1month"
// let bboutput = "170"
// weekChart.onclick = () => {
//     selectChart.openStockChart(bb, bbinterval, bboutput);
// };

// max
let bbChart = document.getElementById("bb-chart-button");
let bb = "BB"
let bbinterval = "1month"
let bboutput = "170"
bbChart.onclick = () => {
    selectChart.openStockChart(bb, bbinterval, bboutput);
};

let amcChart = document.getElementById("amc-chart-button");
let amc = "AMC"
let amcinterval = "1month"
let amcoutput = "170"
amcChart.onclick = () => {
    selectChart.openStockChart(amc, amcinterval, amcoutput);
};

let nokChart = document.getElementById("nok-chart-button");
let nok = "NOK"
let nokinterval = "1month"
let nokoutput = "170"
nokChart.onclick = () => {
    selectChart.openStockChart(nok, nokinterval, nokoutput);
};

let gmeChart = document.getElementById("gme-chart-button");
let gme = "GME"
let gmeinterval = "1month"
let gmeoutput = "170"
gmeChart.onclick = () => {
    selectChart.openStockChart(gme, gmeinterval, gmeoutput);
};

let bbbyChart = document.getElementById("bbby-chart-button");
let bbby = "BBBY"
let bbbyinterval = "1month"
let bbbyoutput = "170"
bbbyChart.onclick = () => {
    selectChart.openStockChart(bbby, bbbyinterval, bbbyoutput);
};

window.onload = function () {
    const container = document.querySelector(".chart-container")
    const chart = document.querySelector(".full-chart")
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        aboutFile.closeModal();
        container.style.display = 'none';
        chart.style.display = "none";
    }
}

document.querySelector(".navbar-logo").addEventListener("click", () => { 
    sessionStorage.setItem("reloading", "true");
    window.location.reload();
});
