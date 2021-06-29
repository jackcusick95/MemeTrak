import axios from "axios";
import { myAPIKey } from '../../keys.js';
import "core-js";
import "regenerator-runtime";
import "../styles/about.scss";


export const selectAMCChart = async () => {

    const response = await axios.get("https://api.twelvedata.com/time_series", {
        params: {
            symbol: "AMC",
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
    // if (window.amcChart.id !== "amcChart") amcChart.destroy();

    document.querySelector(".amc-chart").innerHTML = chartTemplate(response.data);
    const amcchart = document.querySelector(".amc-chart")
    const chartcontainer = document.querySelector(".chart-container")
    chartcontainer.style.display = 'none';
    amcchart.style.display = 'none';
}

export function openAMCChart() {
    const amcchart = document.querySelector(".amc-chart")
    const amcchartbutton = document.querySelector(".amcbutton")
    const mainContentContainer = document.querySelector('.main-content-container')
    const chartcontainer = document.querySelector(".chart-container")
    const landingpage = document.querySelector(".landing-page")

    mainContentContainer.onclick = (e) => {
        if (e.target === amcchartbutton) {
            chartcontainer.style.display = 'block';
            amcchart.style.display = 'block';
            landingpage.style.display = "none";
        }
    }
}

const chartTemplate = (chartInfo) => {
    let intervalWeekly = [];
    let amcopen = [];

    Object.values(chartInfo.values).map((datapoint) => {
        amcopen.unshift(datapoint.open);
        intervalWeekly.unshift(datapoint.datetime);
    });


    let amcpercentChange = (
        ((amcopen[amcopen.length - 1] - amcopen[0]) / amcopen[0]) *
        100
    ).toFixed(2);
    amcpercentChange = amcpercentChange > 0 ? "+" + amcpercentChange : amcpercentChange;


    let color =
        amcopen[amcopen.length - 1] - amcopen[0] > 0
            ? "rgba(0,0,0)"
            : "rgba(0,0,0)";

    let ctx = document.getElementById("amcChart").getContext("2d");

    window.amcChart = new Chart(ctx, {
        responsive: true,
        maintainAspectRatio: false,
        type: "line",
        data: {
            labels: intervalWeekly,
            datasets: [
                {
                    label: "",
                    data: amcopen,
                    borderColor: "rgb(54, 236, 189)",
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
                    text: [`Max: "AMC" (${amcpercentChange}%)`],
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