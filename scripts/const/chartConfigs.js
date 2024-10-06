import getCommitFrequency from "../service/getCommitFrequency.js";

// IT LANGUAGE chart
const itLanguageLabels = ["C#", "JavaScript", "XAML", "HTML&CSS", "SQL"];
const itLanguageData = {
    labels: itLanguageLabels,
    datasets: [
        {
            label: "Language skill",
            data: [9, 6, 4, 8, 5],
            borderColor: "rgba(186, 219, 173, 1)",
            backgroundColor: "rgba(186, 219, 173, 0.1)",
        },
    ]
};

const itLanguageConfig = {
    type: "radar",
    data: itLanguageData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: "Language skill",
                font: {
                    weight: "100",
                },
            },
        },
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                min: 0,
                max: 10,
                pointLabels: {
                    font: {
                        weight: "bold",
                    }
                },
            },
        }
    },
};

// LIBRARY and FRAMEWORK chart
const libAndFwLabels = ["ASP.NET Core", "Entity Framework Core", "WPF", "React", "TypeScript"];
const libAndFwData = {
    labels: libAndFwLabels,
    datasets: [
        {
            label: "Library and framework skill",
            data: [7, 4, 4, 3, 8],
            borderColor: [
                "rgba(252, 232, 131, 1)",
                "rgba(228, 113, 122, 1)",
                "rgba(186, 219, 173, 1)",
                "rgba(127, 199, 255, 1)",
                "rgba(204, 204, 255, 1)",
            ],
            backgroundColor: [
                "rgba(252, 232, 131, 0.1)",
                "rgba(228, 113, 122, 0.1)",
                "rgba(186, 219, 173, 0.1)",
                "rgba(127, 199, 255, 0.1)",
                "rgba(204, 204, 255, 0.1)",
            ],
            borderRadius: 5,
        },
    ]
};

const libAndFwConfig = {
    type: "bar",
    data: libAndFwData,
    options: {
        indexAxis: "y",
        elements: {
            bar: {
                borderWidth: 2,
            }
        },
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: "Frameworks skill",
                font: {
                    weight: "100",
                }
            },
        },
        scales: {
            x: {
                min: 0,
                max: 10,
            },
            y: {
                angleLines: {
                    display: false
                },
                ticks: {
                    font: {
                        weight: "bold",
                    },
                },
            },
        },
    },
};

// COMMIT FREQUENCY from GitHub

let commitFreqYear = [];
let commitFreqCommitCount = [];
let commitFreqBorderColor = [];
let commitFreqBackgroundColor = [];

const commitCountToYear = {
    "2022": 5,
    "2023": 96,
    "2024": 109,
    "2025": 0
}

Object.keys(commitCountToYear).forEach(year => {
    commitFreqYear.push(year);
    commitFreqCommitCount.push(commitCountToYear[year]);

    let redInt = Math.random() * 255 + 1;
    let greenInt = Math.random() * 255 + 1;
    let blueInt = Math.random() * 255 + 1;

    commitFreqBorderColor.push(`rgba(${redInt}, ${greenInt}, ${blueInt}, 1)`);
    commitFreqBackgroundColor.push(`rgba(${redInt}, ${greenInt}, ${blueInt}, 0.1)`);
})

// getCommitFrequency("Fokstal").then(commitCountsToYear => {
//     Object.keys(commitCountsToYear).forEach(year => {
//         commitFreqYear = [...year];
//         commitFreqCommitCount = [...commitCountsToYear[year]];
//     })
// });

const commitFreqData = {
    labels: commitFreqYear,
    datasets: [
        {
            label: "Commit frequency",
            data: commitFreqCommitCount,
            borderColor: commitFreqBorderColor,
            backgroundColor: commitFreqBackgroundColor,
            borderRadius: 5,
        },
    ]
};

const commitFreqConfig = {
    type: "bar",
    data: commitFreqData,
    options: {
        elements: {
            bar: {
                borderWidth: 2,
            }
        },
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: "Commit frequency on GitHub",
                font: {
                    weight: "100",
                }
            },
        },
        scales: {
            y: {
                min: 0,
                max: 200,
            },
            x: {
                angleLines: {
                    display: false
                },
                ticks: {
                    font: {
                        weight: "bold",
                    },
                },
            },
        },
    },
};

export { itLanguageConfig, libAndFwConfig, commitFreqConfig };