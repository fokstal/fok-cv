import takeRGBA from "../../helpers/takeRandomRGBA.js";
let commitFreqYear = [];
let commitFreqCommitCount = [];
let commitFreqBorderColor = [];
let commitFreqBackgroundColor = [];
const commitCountToYear = {
    "2022": 5,
    "2023": 96,
    "2024": 109,
    "2025": 0
};
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
const commitFreq_ChartData = {
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
};
const commitFreq_ChartOptions = {
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
};
const commitFreq_ChartConfig = {
    type: "bar",
    data: commitFreq_ChartData,
    options: commitFreq_ChartOptions,
};
export default commitFreq_ChartConfig;
