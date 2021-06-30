import axios from "axios";
import { myAPIKey } from '../../keys.js';
import "core-js";
import "regenerator-runtime";
import "../styles/about.scss";


export const loadStockChart = async (arg) => {
    let memeTicker = arg;
    const response = await axios.get("https://api.twelvedata.com/time_series", {
        params: {
            symbol: memeTicker,
            interval: "1month",
            outputsize: "130",
            apikey: myAPIKey,
            source: "docs",
        },
    });

    if (response.data.status === "error") {
        console.log("Check console to see API call error.")
        return [];
    }
    if (window.stockChart.id !== "stockChart") stockChart.destroy();

    document.querySelector(".stock-chart").innerHTML = chartTemplate(response.data);
    const stockchart = document.querySelector(".stock-chart")
    const chartcontainer = document.querySelector(".chart-container")
    chartcontainer.style.display = 'none';
    stockchart.style.display = 'none';
}

export function openStockChart(button) {
    const stockchart = document.querySelector(".stock-chart")
    const stockbutton = document.querySelector(button)
    const mainContentContainer = document.querySelector('.main-content-container')
    const chartcontainer = document.querySelector(".chart-container")
    const landingpage = document.querySelector(".landing-page")

    mainContentContainer.onclick = (e) => {
        if (e.target === stockbutton) {
            chartcontainer.style.display = 'block';
            stockchart.style.display = 'block';
            landingpage.style.display = "none";
        }
    }
}

const chartTemplate = (chartInfo) => {
    let intervalWeekly = [];
    let stockopen = [];

    Object.values(chartInfo.values).map((datapoint) => {
        stockopen.unshift(datapoint.open);
        intervalWeekly.unshift(datapoint.datetime);
    });


    let stockpercentchange = (
        ((stockopen[stockopen.length - 1] - stockopen[0]) / stockopen[0]) *
        100
    ).toFixed(2);
    stockpercentchange = stockpercentchange > 0 ? "+" + stockpercentchange : stockpercentchange;


    let color =
        stockopen[stockopen.length - 1] - stockopen[0] > 0
            ? "rgba(0,0,0)"
            : "rgba(0,0,0)";

    let ctx = document.getElementById("stockChart").getContext("2d");

    window.stockChart = new Chart(ctx, {
        responsive: true,
        maintainAspectRatio: false,
        type: "line",
        data: {
            labels: intervalWeekly,
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
                    beginAtZero: true,
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
                    text: [`Max: "BB" (${stockpercentchange}%)`],
                    color: color,
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