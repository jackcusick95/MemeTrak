import axios from "axios"; 
import { myAPIKey } from '../../keys.js';
import "core-js";
import "regenerator-runtime";
import "../styles/about.scss";


export const openMaxChart = async (ticker) => {
    let memeTicker = ticker;
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
    if (window.maxChart.id !== "maxChart") maxChart.destroy();

    document.querySelector(".max-chart").innerHTML = chartTemplate(response.data);

    const landingpage = document.querySelector(".landing-page")
    const landingbuttons = document.querySelector(".landing-buttons")
    landingpage.style.display = "none";
    landingbuttons.style.display = "none";

    const maxcontainer = document.querySelector(".max-chart")
    const chartcontainer = document.querySelector(".chart-container")
    chartcontainer.style.display = "block";
    maxcontainer.style.display = "block";

    // const maxchart = document.querySelector(".max-chart")
    // const chartcontainer = document.querySelector(".chart-container")
    // chartcontainer.style.display='none';
    // maxchart.style.display = 'none'; 
}

// export function openMaxChart() {
//     const maxchart = document.querySelector(".max-chart")
//     const maxchartbutton = document.querySelector(".maxchartbutton")
//     const mainContentContainer = document.querySelector('.main-content-container')
//     const chartcontainer = document.querySelector(".chart-container")
//     const landingpage= document.querySelector(".landing-page")

//     mainContentContainer.onclick = (e) => {
//         if (e.target === maxchartbutton) {
//             chartcontainer.style.display ='block'; 
//             maxchart.style.display = 'block';
//             landingpage.style.display = "none"; 
//         }
//     }
// }

const chartTemplate = (chartInfo) => {
    let intervalWeekly = [];
    let bbopen = [];
    let AMCopen = []; 
    let GMEopen = []; 
    let NOKopen = []; 
    let BBBYopen = []; 

    Object.values(chartInfo.BB.values).map((datapoint) => {
        bbopen.unshift(datapoint.open);
        intervalWeekly.unshift(datapoint.datetime);
    });

    Object.values(chartInfo.AMC.values).map((datapoint) => {
        AMCopen.unshift(datapoint.open);
    });

    Object.values(chartInfo.GME.values).map((datapoint) => {
        GMEopen.unshift(datapoint.open);
    });

    Object.values(chartInfo.NOK.values).map((datapoint) => {
        NOKopen.unshift(datapoint.open);
    });

    Object.values(chartInfo.BBBY.values).map((datapoint) => {
        BBBYopen.unshift(datapoint.open);
    });

    let bbpercentChange = (
        ((bbopen[bbopen.length - 1] - bbopen[0]) / bbopen[0]) *
        100
    ).toFixed(2);
    bbpercentChange = bbpercentChange > 0 ? "+" + bbpercentChange : bbpercentChange;

    let AMCpercentChange = (
        ((AMCopen[AMCopen.length - 1] - AMCopen[0]) / AMCopen[0]) *
        100
    ).toFixed(2);
    AMCpercentChange = AMCpercentChange > 0 ? "+" + AMCpercentChange : AMCpercentChange;

    let GMEpercentChange = (
        ((GMEopen[GMEopen.length - 1] - GMEopen[0]) / GMEopen[0]) *
        100
    ).toFixed(2);
    GMEpercentChange = GMEpercentChange > 0 ? "+" + GMEpercentChange : GMEpercentChange;

    let NOKpercentChange = (
        ((NOKopen[NOKopen.length - 1] - NOKopen[0]) / NOKopen[0]) *
        100
    ).toFixed(2);
    NOKpercentChange = NOKpercentChange > 0 ? "+" + NOKpercentChange : NOKpercentChange;

    let BBBYpercentChange = (
        ((BBBYopen[BBBYopen.length - 1] - BBBYopen[0]) / BBBYopen[0]) *
        100
    ).toFixed(2);
    BBBYpercentChange = BBBYpercentChange > 0 ? "+" + BBBYpercentChange : BBBYpercentChange;

    let color =
        bbopen[bbopen.length - 1] - bbopen[0] > 0
            ? "rgba(0,0,0)"
            : "rgba(0,0,0)";

    let ctx = document.getElementById("maxChart").getContext("2d");

    window.maxChart = new Chart(ctx, {
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
                {
                    label: "",
                    data: AMCopen,
                    borderColor: "rgb(54, 236, 189)",
                    borderWidth: 2,
                    pointHitRadius: 100,
                },
                // {
                //     label: "",
                //     data: GMEopen,
                //     borderColor: "rgb(0, 0, 255)",
                //     borderWidth: 2,
                //     pointHitRadius: 100,
                // },
                {
                    label: "",
                    data: NOKopen,
                    borderColor: "rgb(106, 90, 205)",
                    borderWidth: 2,
                    pointHitRadius: 100,
                },
                {
                    label: "",
                    data: BBBYopen,
                    borderColor: "rgb(255, 165, 0)",
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
                    text: [`Max: "BB" (${bbpercentChange}%), Max: "AMC" (${AMCpercentChange}%), Max: "GME" (${GMEpercentChange}%), Max: "NOK" (${NOKpercentChange}%), Max: "BBBY" (${BBBYpercentChange}%)`],
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



