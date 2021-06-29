import axios from "axios";
import { myAPIKey } from '../../keys.js';
import "core-js";
import "regenerator-runtime";
import "../styles/about.scss";


export const selectBBChart = async () => {

    const response = await axios.get("https://api.twelvedata.com/time_series", {
        params: {
            symbol: "BB",
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
    // if (window.bbChart.id !== "bbChart") bbChart.destroy();

    document.querySelector(".bb-chart").innerHTML = chartTemplate(response.data);
    const bbchart = document.querySelector(".bb-chart")
    const chartcontainer = document.querySelector(".chart-container")
    chartcontainer.style.display = 'none';
    bbchart.style.display = 'none';
}

export function openBBChart() {
    const bbchart = document.querySelector(".bb-chart")
    const bbchartbutton = document.querySelector(".blackberrybutton")
    const mainContentContainer = document.querySelector('.main-content-container')
    const chartcontainer = document.querySelector(".chart-container")
    const landingpage = document.querySelector(".landing-page")

    mainContentContainer.onclick = (e) => {
        if (e.target === bbchartbutton) {
            chartcontainer.style.display = 'block';
            bbchart.style.display = 'block';
            landingpage.style.display = "none";
        }
    }
}

const chartTemplate = (chartInfo) => {
    let intervalWeekly = [];
    let bbopen = [];

    Object.values(chartInfo.values).map((datapoint) => {
        bbopen.unshift(datapoint.open);
        intervalWeekly.unshift(datapoint.datetime);
    });


    let bbpercentChange = (
        ((bbopen[bbopen.length - 1] - bbopen[0]) / bbopen[0]) *
        100
    ).toFixed(2);
    bbpercentChange = bbpercentChange > 0 ? "+" + bbpercentChange : bbpercentChange;


    let color =
        bbopen[bbopen.length - 1] - bbopen[0] > 0
            ? "rgba(0,0,0)"
            : "rgba(0,0,0)";

    let ctx = document.getElementById("bbChart").getContext("2d");

    window.bbChart = new Chart(ctx, {
        responsive: true,
        maintainAspectRatio: false,
        type: "line",
        data: {
            labels: intervalWeekly,
            datasets: [
                {
                    label: "",
                    data: bbopen,
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
                    text: [`Max: "BB" (${bbpercentChange}%)`],
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