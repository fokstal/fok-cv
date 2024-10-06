// IT LANGUAGE chart
const itLanguageLabels = ["C#", "JavaScript", "XAML", "HTML&CSS", "SQL"];
const itLanguageData = {
    labels: itLanguageLabels,
    datasets: [
        {
            label: "Language skill",
            data: [9, 6, 4, 8, 5],
            borderColor: "rgba(4, 145, 52, 1)",
            backgroundColor: "rgba(4, 145, 52, 0.1)",
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
                text: "Language skill"
            },
        },
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                min: 0,
                max: 10
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
                "rgba(204, 204, 255, 1)",
                "rgba(4, 145, 52, 1)",
                "rgba(4, 145, 52, 1)"
            ],
            backgroundColor: [
                "rgba(252, 232, 131, 0.1)",
                "rgba(228, 113, 122, 0.1)",
                "rgba(204, 204, 255, 0.1)",
                "rgba(4, 145, 52, 0.1)",
                "rgba(4, 145, 52, 0.1)"
            ],
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
                text: "Frameworks skill"
            },
            scales: {
                r: {
                    angleLines: {
                        display: false
                    },
                    min: 0,
                    max: 10,
                },
            },
        },
    },
};

export { itLanguageConfig, libAndFwConfig };