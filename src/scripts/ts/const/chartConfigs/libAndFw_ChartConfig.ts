import { ChartConfiguration, ChartData, ChartOptions } from "chart.js";
import takeRGBA from "../../helpers/takeRandomRGBA";

const libAndFwLabels = ["ASP.NET Core", "EF Core", "WPF", "React", "TypeScript"];
const libAndFwRGBABorderList: any = [];
const libAndFwRGBABackgroundList: any = [];

libAndFwLabels.forEach(label => {
    const rgba = takeRGBA();

    libAndFwRGBABorderList.push(`rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, 1)`);
    libAndFwRGBABackgroundList.push(`rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, .1)`);
});

const libAndFw_ChartData: ChartData = {
    labels: libAndFwLabels,
    datasets: [
        {
            label: "Library and framework skill",
            data: [7, 4, 4, 3, 8],
            borderColor: libAndFwRGBABorderList,
            backgroundColor: libAndFwRGBABackgroundList,
            // borderRadius: 5,
        },
    ]
}

const libAndFw_ChartOptions: ChartOptions = {
    // indexAxis: "y",
    elements: {
        // bar: {
        //     borderWidth: 2,
        // }
    },
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
    },
    scales: {
        // x: {
        //     min: 0,
        //     max: 10,
        //     reverse: true,
        // },
        // y: {
        //     position: "right",
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

const libAndFw_ChartConfig: ChartConfiguration = {
    type: "bar",
    data: libAndFw_ChartData,
    options: libAndFw_ChartOptions,
}

export default libAndFw_ChartConfig;