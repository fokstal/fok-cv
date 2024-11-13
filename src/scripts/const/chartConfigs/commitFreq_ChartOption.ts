import { EChartOption } from "echarts";

const commitFreq_ChartOption: EChartOption = {
    xAxis: {
        type: "category",
        data: ["2022", "2023", "2024", "2025"]
    },
    yAxis: {
        type: "value",
        max: 200,
    },
    series: [
        {
            data: [5, 96, 109, 0],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
                color: "rgba(180, 180, 180, 0.2)"
            },
        }
    ]
};


export default commitFreq_ChartOption;