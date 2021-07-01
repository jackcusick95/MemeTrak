import axios from "axios";
import { myAPIKey } from '../../keys.js';
import "core-js";
import "regenerator-runtime";
import "../styles/about.scss";


export const openStockChart = async (ticker, interval, output) => {


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
    }

    // implement this when unsubscribing to api plan
    if (response.data.status === "error") {
        console.log("Check console to see API call error.")
        return [];
    }

    document.querySelector(".stock-chart").innerHTML = chartTemplate(response.data, ticker);

    const landingpage = document.querySelector(".landing-page")
    const landingbuttons = document.querySelector(".landing-buttons")
    landingpage.style.display = "none";
    landingbuttons.style.display = "none";

    const stockcontainer = document.querySelector(".stock-chart")
    const chartcontainer = document.querySelector(".chart-container")
    chartcontainer.style.display = "block";
    stockcontainer.style.display = "block";
  

}

const chartTemplate = (chartInfo, ticker) => {
    let intervalmax = [];
    let stockopen = [];

    Object.values(chartInfo.values).map((datapoint) => {
        stockopen.unshift(datapoint.open);
        intervalmax.unshift(datapoint.datetime);
    });

    let ctx = document.getElementById("stockChart").getContext("2d");

    window.stockChart = new Chart(ctx, {
        responsive: true,
        maintainAspectRatio: false,
        type: "line",
        data: {
            labels: intervalmax,
            datasets: [
                {
                    label: "",
                    data: stockopen,
                    borderColor: "rgb(255, 0, 0)",
                    borderWidth: 2,
                    pointHitRadius: 100,
                },
            ],
        },
        options: {
            elements: {
                line: {
                    borderCapStyle: "round",
                    tension: 0.2,
                },
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
                y: {
                    beginAtZero: false,
                },

                x: {
                    grid: {
                        color: "rgba(0,0,0,0)",
                        borderColor: "rgba(0,0,0,0)",
                        tickColor: "rgba(0,0,0,0)",
                    },
                    display: true,
                    ticks: {
                        display: true,
                    },
                },
            },
            plugins: {
                title: {
                    display: true,
                    text: [`${ticker}`],
                    color: "rgba(0,0,0)",
                    font: {
                        family:
                            "Cambria, 'Cochin', 'Georgia', 'Times', 'Times New Roman', serif",
                        size: 18,
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