import axios from "axios";
import { myAPIKey } from '../../keys.js';
import "core-js";
import "regenerator-runtime";
import "../styles/about.scss";


export const selectNOKChart = async () => {

    const response = await axios.get("https://api.twelvedata.com/time_series", {
        params: {
            symbol: "NOK",
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
    // if (window.nokChart.id !== "bbChart") nokChart.destroy();

    document.querySelector(".nok-chart").innerHTML = chartTemplate(response.data);
    const nokchart = document.querySelector(".nok-chart")
    const chartcontainer = document.querySelector(".chart-container")
    chartcontainer.style.display = 'none';
    nokchart.style.display = 'none';
}

export function openNOKChart() {
    const nokchart = document.querySelector(".nok-chart")
    const nokchartbutton = document.querySelector(".nokbutton")
    const mainContentContainer = document.querySelector('.main-content-container')
    const chartcontainer = document.querySelector(".chart-container")
    const landingpage = document.querySelector(".landing-page")

    mainContentContainer.onclick = (e) => {
        if (e.target === nokchartbutton) {
            chartcontainer.style.display = 'block';
            nokchart.style.display = 'block';
            landingpage.style.display = "none";
        }
    }
}

const chartTemplate = (chartInfo) => {
    let intervalWeekly = [];
    let nokopen = [];

    Object.values(chartInfo.values).map((datapoint) => {
        nokopen.unshift(datapoint.open);
        intervalWeekly.unshift(datapoint.datetime);
    });


    let nokpercentChange = (
        ((nokopen[nokopen.length - 1] - nokopen[0]) / nokopen[0]) *
        100
    ).toFixed(2);
    nokpercentChange = nokpercentChange > 0 ? "+" + nokpercentChange : nokpercentChange;


    let color =
        nokopen[nokopen.length - 1] - nokopen[0] > 0
            ? "rgba(0,0,0)"
            : "rgba(0,0,0)";

    let ctx = document.getElementById("nokChart").getContext("2d");

    window.nokChart = new Chart(ctx, {
        responsive: true,
        maintainAspectRatio: false,
        type: "line",
        data: {
            labels: intervalWeekly,
            datasets: [
                {
                    label: "",
                    data: nokopen,
                    borderColor: "rgb(106, 90, 205)",
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
                    text: [`Max: "NOK" (${nokpercentChange}%)`],
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