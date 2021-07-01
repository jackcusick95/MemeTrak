import * as aboutFile from './scripts/navbar.js';
import * as selectChart from './scripts/stock_chart.js';


document.addEventListener('DOMContentLoaded', () => {
    aboutFile.addEventListeners();
    aboutFile.openModal();

})


const chartcontainer = document.querySelector(".chart-container")
const stockcontainer = document.querySelector(".stock-chart")
const bbbuttons = document.querySelector(".bb-button-container")
const amcbuttons = document.querySelector(".amc-button-container")
const nokbuttons = document.querySelector(".nok-button-container")
const gmebuttons = document.querySelector(".gme-button-container")
const bbbybuttons = document.querySelector(".bbby-button-container")
bbbuttons.style.display = "none";
nokbuttons.style.display = "none";
amcbuttons.style.display = "none";
gmebuttons.style.display = "none";
bbbybuttons.style.display = "none";
chartcontainer.style.display = "none";
stockcontainer.style.display = "none";


let bbChart = document.getElementById("bb-chart-button");
let bbDayChart = document.getElementById("bb-day-button");
let bbWeekChart = document.getElementById("bb-week-button");
let bbMonthChart = document.getElementById("bb-month-button");
let bbYearChart = document.getElementById("bb-year-button");
let bbMaxChart = document.getElementById("bb-max-button");
let bb = "BB"
let bbinterval = "1month"
let bboutput = "170"
let time = "max"
bbChart.onclick = () => {
    selectChart.openStockChart(bb, bbinterval, bboutput, time);
    bbDayChart.addEventListener("click", () => {
        let bb = "BB"
        let bbinterval = "5min"
        let bboutput = "78"
        let time= "day"
        window.stockChart.destroy();
        selectChart.openStockChart(bb, bbinterval, bboutput, time);
    });
    bbWeekChart.addEventListener("click", () => {
        let bb = "BB"
        let bbinterval = "1h"
        let bboutput = "35"
        let time = "week"
        window.stockChart.destroy(); 
        selectChart.openStockChart(bb, bbinterval, bboutput, time);
    });
    bbMonthChart.addEventListener("click", () => {
        let bb = "BB"
        let bbinterval = "1h"
        let time = "month"
        let bboutput = "155"
        window.stockChart.destroy();
        selectChart.openStockChart(bb, bbinterval, bboutput, time);
    });
    bbYearChart.addEventListener("click", () => {
        let bb = "BB"
        let bbinterval = "1day"
        let bboutput = "254"
        let time = "year"
        window.stockChart.destroy();
        selectChart.openStockChart(bb, bbinterval, bboutput, time);
    });
    bbMaxChart.addEventListener("click", () => {
        let bb = "BB"
        let bbinterval = "1month"
        let bboutput = "170"
        let time = "max"
        window.stockChart.destroy();
        selectChart.openStockChart(bb, bbinterval, bboutput, time);
    });
};




let amcChart = document.getElementById("amc-chart-button");
let amcDayChart = document.getElementById("amc-day-button");
let amcWeekChart = document.getElementById("amc-week-button");
let amcMonthChart = document.getElementById("amc-month-button");
let amcYearChart = document.getElementById("amc-year-button");
let amcMaxChart = document.getElementById("amc-max-button");
let amc = "AMC"
let amcinterval = "1month"
let amcoutput = "170"
amcChart.onclick = () => {
    selectChart.openStockChart(amc, amcinterval, amcoutput);
    amcDayChart.addEventListener("click", () => {
        let amc = "AMC"
        let amcinterval = "5min"
        let amcoutput = "78"
        window.stockChart.destroy();
        selectChart.openStockChart(amc, amcinterval, amcoutput);
    });
    amcWeekChart.addEventListener("click", () => {
        let amc = "AMC"
        let amcinterval = "1h"
        let amcoutput = "35"
        window.stockChart.destroy();
        selectChart.openStockChart(amc, amcinterval, amcoutput);
    });
    amcMonthChart.addEventListener("click", () => {
        let amc = "AMC"
        let amcinterval = "1h"
        let amcoutput = "155"
        window.stockChart.destroy();
        selectChart.openStockChart(amc, amcinterval, amcoutput);
    });
    amcYearChart.addEventListener("click", () => {
        let amc = "AMC"
        let amcinterval = "1day"
        let amcoutput = "254"
        window.stockChart.destroy();
        selectChart.openStockChart(amc, amcinterval, amcoutput);
    });
    amcMaxChart.addEventListener("click", () => {
        let amc = "AMC"
        let amcinterval = "1month"
        let amcoutput = "170"
        window.stockChart.destroy();
        selectChart.openStockChart(amc, amcinterval, amcoutput);
    });
};

let nokChart = document.getElementById("nok-chart-button");
let nokDayChart = document.getElementById("nok-day-button");
let nokWeekChart = document.getElementById("nok-week-button");
let nokMonthChart = document.getElementById("nok-month-button");
let nokYearChart = document.getElementById("nok-year-button");
let nokMaxChart = document.getElementById("nok-max-button");
let nok = "NOK"
let nokinterval = "1month"
let nokoutput = "170"
nokChart.onclick = () => {
    selectChart.openStockChart(nok, nokinterval, nokoutput);
    nokDayChart.addEventListener("click", () => {
        let nok = "NOK"
        let nokinterval = "5min"
        let nokoutput = "78"
        window.stockChart.destroy();
        selectChart.openStockChart(nok, nokinterval, nokoutput);
    });
    nokWeekChart.addEventListener("click", () => {
        let nok = "NOK"
        let nokinterval = "1h"
        let nokoutput = "35"
        window.stockChart.destroy();
        selectChart.openStockChart(nok, nokinterval, nokoutput);
    });
    nokMonthChart.addEventListener("click", () => {
        let nok = "NOK"
        let nokinterval = "1h"
        let nokoutput = "155"
        window.stockChart.destroy();
        selectChart.openStockChart(nok, nokinterval, nokoutput);
    });
    nokYearChart.addEventListener("click", () => {
        let nok = "NOK"
        let nokinterval = "1day"
        let nokoutput = "254"
        window.stockChart.destroy();
        selectChart.openStockChart(nok, nokinterval, nokoutput);
    });
    nokMaxChart.addEventListener("click", () => {
        let nok = "NOK"
        let nokinterval = "1month"
        let nokoutput = "170"
        window.stockChart.destroy();
        selectChart.openStockChart(nok, nokinterval, nokoutput);
    });
};

let gmeChart = document.getElementById("gme-chart-button");
let gmeDayChart = document.getElementById("gme-day-button");
let gmeWeekChart = document.getElementById("gme-week-button");
let gmeMonthChart = document.getElementById("gme-month-button");
let gmeYearChart = document.getElementById("gme-year-button");
let gmeMaxChart = document.getElementById("gme-max-button");
let gme = "GME"
let gmeinterval = "1month"
let gmeoutput = "170"
gmeChart.onclick = () => {
    selectChart.openStockChart(gme, gmeinterval, gmeoutput);
    gmeDayChart.addEventListener("click", () => {
        let gme = "GME"
        let gmeinterval = "5min"
        let gmeoutput = "78"
        window.stockChart.destroy();
        selectChart.openStockChart(gme, gmeinterval, gmeoutput);
    });
    gmeWeekChart.addEventListener("click", () => {
        let gme = "GME"
        let gmeinterval = "1h"
        let gmeoutput = "35"
        window.stockChart.destroy();
        selectChart.openStockChart(gme, gmeinterval, gmeoutput);
    });
    gmeMonthChart.addEventListener("click", () => {
        let gme = "GME"
        let gmeinterval = "1h"
        let gmeoutput = "155"
        window.stockChart.destroy();
        selectChart.openStockChart(gme, gmeinterval, gmeoutput);
    });
    gmeYearChart.addEventListener("click", () => {
        let gme = "GME"
        let gmeinterval = "1day"
        let gmeoutput = "254"
        window.stockChart.destroy();
        selectChart.openStockChart(gme, gmeinterval, gmeoutput);
    });
    gmeMaxChart.addEventListener("click", () => {
        let gme = "GME"
        let gmeinterval = "1month"
        let gmeoutput = "170"
        window.stockChart.destroy();
        selectChart.openStockChart(gme, gmeinterval, gmeoutput);
    });
};

let bbbyChart = document.getElementById("bbby-chart-button");
let bbbyDayChart = document.getElementById("bbby-day-button");
let bbbyWeekChart = document.getElementById("bbby-week-button");
let bbbyMonthChart = document.getElementById("bbby-month-button");
let bbbyYearChart = document.getElementById("bbby-year-button");
let bbbyMaxChart = document.getElementById("bbby-max-button");
let bbby = "BBBY"
let bbbyinterval = "1month"
let bbbyoutput = "170"
bbbyChart.onclick = () => {
    selectChart.openStockChart(bbby, bbbyinterval, bbbyoutput);
    bbbyDayChart.addEventListener("click", () => {
        let bbby = "BBBY"
        let bbbyinterval = "5min"
        let bbbyoutput = "78"
        window.stockChart.destroy();
        selectChart.openStockChart(bbby, bbbyinterval, bbbyoutput);
    });
    bbbyWeekChart.addEventListener("click", () => {
        let bbby = "BBBY"
        let bbbyinterval = "1h"
        let bbbyoutput = "35"
        window.stockChart.destroy();
        selectChart.openStockChart(bbby, bbbyinterval, bbbyoutput);
    });
    bbbyMonthChart.addEventListener("click", () => {
        let bbby = "BBBY"
        let bbbyinterval = "1h"
        let bbbyoutput = "155"
        window.stockChart.destroy();
        selectChart.openStockChart(bbby, bbbyinterval, bbbyoutput);
    });
    bbbyYearChart.addEventListener("click", () => {
        let bbby = "BBBY"
        let bbbyinterval = "1day"
        let bbbyoutput = "254"
        window.stockChart.destroy();
        selectChart.openStockChart(bbby, bbbyinterval, bbbyoutput);
    });
    bbbyMaxChart.addEventListener("click", () => {
        let bbby = "BBBY"
        let bbbyinterval = "1month"
        let bbbyoutput = "170"
        window.stockChart.destroy();
        selectChart.openStockChart(bbby, bbbyinterval, bbbyoutput);
    });
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
