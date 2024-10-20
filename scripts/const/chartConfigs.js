import getCommitFrequency from "../service/getCommitFrequency.js";
import takeRGBA from "../helpers/takeRandomRGBA.js";

// IT LANGUAGE chart
const itLanguageLabels = ["C#", "JS", "XAML", "HTML&CSS", "SQL"];
const itLanguageRGBA = takeRGBA();
const itLanguageData = {
    labels: itLanguageLabels,
    datasets: [
        {
            label: "Language skill",
            data: [9, 6, 4, 8, 5],
            borderColor: `rgba(${itLanguageRGBA.r}, ${itLanguageRGBA.g}, ${itLanguageRGBA.b}, 1)`,
            backgroundColor: `rgba(${itLanguageRGBA.r}, ${itLanguageRGBA.g}, ${itLanguageRGBA.b}, .1)`,
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
const libAndFwLabels = ["ASP.NET Core", "EF Core", "WPF", "React", "TypeScript"];
const libAndFwRGBABorderList = [];
const libAndFwRGBABackgroundList = [];

libAndFwLabels.forEach(label => {
    const rgba = takeRGBA();

    libAndFwRGBABorderList.push(`rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, 1)`);
    libAndFwRGBABackgroundList.push(`rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, .1)`);
})

const libAndFwData = {
    labels: libAndFwLabels,
    datasets: [
        {
            label: "Library and framework skill",
            data: [7, 4, 4, 3, 8],
            borderColor: libAndFwRGBABorderList,
            backgroundColor: libAndFwRGBABackgroundList,
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
                display: false,
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
                reverse: true,
            },
            y: {
                position: "right",
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

    const rgba = takeRGBA();

    commitFreqBorderColor.push(`rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, 1)`);
    commitFreqBackgroundColor.push(`rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, .1)`);
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
                position: "right",
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