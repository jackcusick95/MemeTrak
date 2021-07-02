import axios from "axios";
import { myAPIKey } from '../../keys.js';
import "core-js";
import "regenerator-runtime";
import "../styles/about.scss";


export const openStockChart = async (ticker, interval, output, time) => {


    const response = await axios.get("https://api.twelvedata.com/time_series", {
        params: {
            symbol: ticker,
            interval: interval,
            outputsize: output,
            apikey: myAPIKey,
        },
    });

    const bbbuttons = document.querySelector(".bb-button-container")
    const amcbuttons = document.querySelector(".amc-button-container")
    const nokbuttons = document.querySelector(".nok-button-container")
    const gmebuttons = document.querySelector(".gme-button-container")
    const bbbybuttons = document.querySelector(".bbby-button-container")
    const allbuttons = document.querySelector(".allstocks-button-container")
    
    if (time == "day" || "month" || "week") {
        bbbuttons.style.marginLeft = "85px";
        amcbuttons.style.marginLeft = "85px";
        nokbuttons.style.marginLeft = "85px";
        gmebuttons.style.marginLeft = "85px";
        bbbybuttons.style.marginLeft = "85px";
    } 
    
    
    if (ticker == "BB") {
        bbbuttons.style.display = "block";
    } else if ( ticker == "NOK") {
        nokbuttons.style.display = "block";
    } else if (ticker == "AMC") {
        amcbuttons.style.display = "block";
    } else if (ticker == "GME") {
        gmebuttons.style.display = "block";
    } else if (ticker == "BBBY") {
        bbbybuttons.style.display = "block";
    } else if (ticker == "BB, NOK, AMC, GME, BBBY") {
        allbuttons.style.display = "block";
    }
    
    // implement this when unsubscribing to api plan. will error if there are more than 8 api calls/ min
    if (response.data.status === "error") {
        console.log("Check console to see API call error.")
        return [];
    }

    if (ticker == "BB" || ticker =="NOK" || ticker == "GME" || ticker == "AMC" || ticker == "BBBY") {
        document.querySelector(".stock-chart").innerHTML = buildChart(response.data, ticker);
    } else if (ticker == "BB, NOK, AMC, GME, BBBY") {
        document.querySelector(".stock-chart").innerHTML = buildAllChart(response.data, ticker, time);
    }

    const landingpage = document.querySelector(".landing-page")
    const landingbuttons = document.querySelector(".landing-buttons")
    landingpage.style.display = "none";
    landingbuttons.style.display = "none";

    const stockcontainer = document.querySelector(".stock-chart")
    const chartcontainer = document.querySelector(".chart-container")
    chartcontainer.style.display = "block";
    stockcontainer.style.display = "block";
  

}

const buildChart = (chartInfo, ticker) => {
    let intervalmax = [];
    let stockPriceDisplay = [];

    Object.values(chartInfo.values).map((datapoint) => {
        stockPriceDisplay.unshift(datapoint.close);
        intervalmax.unshift(datapoint.datetime);
    });

    let ctx = document.getElementById("stockChart").getContext("2d");

    window.stockChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: intervalmax,
            datasets: [
                {
                    data: stockPriceDisplay,
                    borderColor: "rgb(255, 0, 0)",
                },
            ],
        },
        options: {
            elements: {
                point: {
                    radius: 0,
                },
            },
            scales: {
                grid: {
                    color: "rgba(0,0,0,0)",
                    borderColor: "rgba(0,0,0,0)",
                    display: false,
                },
                x: {
                    grid: {
                        color: "rgba(0,0,0,0)",
                    },
                },
            },
            plugins: {
                title: {
                    display: true,
                    position: 'top', 
                    text: [`${ticker}`],
                    color: "rgba(0,0,0)",
                    font: {
                        family:
                            "Sans Serif",
                        size: 25,
                    },
                },
                legend: {
                    labels: {
                        boxWidth: 0,
                    },
                },
            },
        },
    });
};


const buildAllChart = (chartInfo, ticker, time) => {
    let interval = [];
    let bbprice = [];
    let amcprice = [];
    let gmeprice = [];
    let nokprice = [];
    let bbbyprice = [];

    Object.values(chartInfo.BB.values).map((datapoint) => {
        bbprice.unshift(datapoint.close);
        interval.unshift(datapoint.datetime);
    });

    Object.values(chartInfo.NOK.values).map((datapoint) => {
        nokprice.unshift(datapoint.close);
    });

    Object.values(chartInfo.AMC.values).map((datapoint) => {
        amcprice.unshift(datapoint.close);
    });

    if (time == "max" || "year" ) {
        Object.values(chartInfo.GME.values).map((datapoint) => {
            gmeprice.unshift(datapoint.close);
        });
    } else if (time == "day" || "month" || "week") {
        gmeprice.destroy();
    }

    Object.values(chartInfo.BBBY.values).map((datapoint) => {
        bbbyprice.unshift(datapoint.close);
    });

    let ctx = document.getElementById("stockChart").getContext("2d");

    window.stockChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: interval,
            datasets: [
                {
                    data: bbprice,
                    borderColor: "rgb(255, 0, 0)",
                },
                {
                    data: nokprice,
                    borderColor: "rgb(0, 128, 0)",
                },
                {
                    data: amcprice,
                    borderColor: "rgb(0, 255, 255)",
                },
                {
                    data: gmeprice,
                    borderColor: "rgb(138, 43, 226)",
                },
                {
                    data: bbbyprice,
                    borderColor: "rgb(255, 140, 0)",
                },
            ],
        },
        options: {
            elements: {
                point: {
                    radius: 0,
                },
            },
            maintainAspectRatio: false,
            scales: {
                grid: {
                    color: "rgba(0,0,0,0)",
                    borderColor: "rgba(0,0,0,0)",
                    display: false,
                },
                x: {
                    grid: {
                        color: "rgba(0,0,0,0)",
                    },
                },
            },
            plugins: {
                title: {
                    display: true,
                    position: 'top',
                    text: [`${ticker}`],
                    color: "rgba(0,0,0)",
                    font: {
                        family:
                            "Sans Serif",
                        size: 25,
                    },
                },
                legend: {
                    labels: {
                        boxWidth: 0,
                    },
                },
            },
        },
    });
};