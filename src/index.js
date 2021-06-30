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



const chartcontainer = document.querySelector(".chart-container")
const maxcontainer = document.querySelector(".max-chart")
const stockcontainer = document.querySelector(".stock-chart")
// const mainContentContainer = document.querySelector('.main-content-container')
// const landingpage = document.querySelector(".landing-page")
// const landingbuttons = document.querySelector(".landing-buttons")

chartcontainer.style.display = "none";
maxcontainer.style.display = "none";
stockcontainer.style.display = "none";

let maxChart = document.getElementById("max-chart-button");
let stocks = "BB, AMC, GME, NOK, BBBY"
maxChart.onclick = () => {
    selectMaxChart.openMaxChart(stocks);
};


let bbChart = document.getElementById("bb-chart-button");
let bb = "BB"
bbChart.onclick = () => {
    selectChart.openStockChart(bb);
};

let amcChart = document.getElementById("amc-chart-button");
let amc = "AMC"
amcChart.onclick = () => {
    selectChart.openStockChart(amc);
};

let nokChart = document.getElementById("nok-chart-button");
let nok = "NOK"
nokChart.onclick = () => {
    selectChart.openStockChart(nok);
};

let gmeChart = document.getElementById("gme-chart-button");
let gme = "GME"
gmeChart.onclick = () => {
    selectChart.openStockChart(gme);
};

let bbbyChart = document.getElementById("bbby-chart-button");
let bbby = "BBBY"
bbbyChart.onclick = () => {
    selectChart.openStockChart(bbby);
};

window.onload = function () {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        aboutFile.closeModal();
    }
}

document.querySelector(".navbar-logo").addEventListener("click", () => { 
    hideChart(); 
    sessionStorage.setItem("reloading", "true");
    window.location.reload();
});
