import { ChartConfiguration, ChartData, ChartOptions } from "chart.js";
import takeRGBA from "../../helpers/takeRandomRGBA.js";

let commitFreqYear: any = [];
let commitFreqCommitCount: number[] = [];
let commitFreqBorderColor: any = [];
let commitFreqBackgroundColor: any = [];

const commitCountToYear: Record<string, number> = {
    "2022": 5,
    "2023": 96,
    "2024": 109,
    "2025": 0
}

// import getCommitFrequency from "../service/getCommitFrequency.js";
// getCommitFrequency("Fokstal").then(commitCountsToYear => {
//     Object.keys(commitCountsToYear).forEach(year => {
//         commitFreqYear = [...year];
//         commitFreqCommitCount = [...commitCountsToYear[year]];
//     })
// });

Object.keys(commitCountToYear).forEach(year => {
    commitFreqYear.push(year);
    commitFreqCommitCount.push(commitCountToYear[year]);

    const rgba = takeRGBA();

    commitFreqBorderColor.push(`rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, 1)`);
    commitFreqBackgroundColor.push(`rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, .1)`);
});

const commitFreq_ChartData: ChartData = {
    labels: commitFreqYear,
    datasets: [
        {
            label: "Commit frequency",
            data: commitFreqCommitCount,
            borderColor: commitFreqBorderColor,
            backgroundColor: commitFreqBackgroundColor,
            // borderRadius: 5,
        },
    ]
}

const commitFreq_ChartOptions: ChartOptions = {
    elements: {
        // bar: {
        //     borderWidth: 2,
        // }
    },
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
    },
    scales: {
        // y: {
        //     min: 0,
        //     max: 200,
        //     position: "right",
        // },a
        // x: {
        //     angleLines: {
        //         display: false
        //     },
        //     ticks: {
        //         font: {
        //             weight: "bold",
        //         },
        //     },
        // },
    },
}

const commitFreq_ChartConfig: ChartConfiguration = {
    type: "bar",
    data: commitFreq_ChartData,
    options: commitFreq_ChartOptions,
}

export default commitFreq_ChartConfig;