import { ChartConfiguration, ChartData, ChartOptions } from "chart.js";
import takeRGBA from "../../helpers/takeRandomRGBA";

const itLangLabels = ["C#", "JS", "XAML", "HTML&CSS", "SQL"];
const itLangRGBA = takeRGBA();

const itLang_ChartData: ChartData = {
    labels: itLangLabels,
    datasets: [
        {
            label: "IT Languages skill",
            data: [9, 6, 4, 8, 5],
            borderColor: `rgba(${itLangRGBA.r}, ${itLangRGBA.g}, ${itLangRGBA.b}, 1)`,
            backgroundColor: `rgba(${itLangRGBA.r}, ${itLangRGBA.g}, ${itLangRGBA.b}, .1)`,
        },
    ]
}

const itLang_ChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
    },
    scales: {
        // r: {
        //     angleLines: {
        //         display: false
        //     },
        //     min: 0,
        //     max: 10,
        //     pointLabels: {
        //         font: {
        //             weight: "bold",
        //         }
        //     },
        // },
    }
}

const itLang_ChartConfig: ChartConfiguration = {
    type: "radar",
    data: itLang_ChartData,
    options: itLang_ChartOptions,
}

export default itLang_ChartConfig;