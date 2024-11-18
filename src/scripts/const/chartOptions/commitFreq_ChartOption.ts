import { EChartOption } from "echarts";
import getRandomHEXColor from "@scripts/helpers/getRandomHEXColor";

const colorGradientStart = getRandomHEXColor();
const colorGradientEnd = getRandomHEXColor();

const commitFreq_ChartOption: EChartOption = {
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "cross",
        },
    },
    // toolbox: {
    //     show: true,
    //     feature: {
    //         saveAsImage: {}
    //     }
    // },
    xAxis: {
        type: "category",
        data: ["2021", "2022", "2023", "2024", "2025"],
    },
    yAxis: {
        type: "value",
        max: 200,
    },
    series: [
        {
            itemStyle: {
                color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: colorGradientStart,
                    }, {
                        offset: 1, color: colorGradientEnd,
                    }],
                    global: false,
                }
            },
            areaStyle: {
                color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: colorGradientStart + "30",
                    }, {
                        offset: 1, color: colorGradientEnd + "30",
                    }],
                    global: false,
                },
            },
            data: [0, 5, 96, 109],
            type: "line"
        }
    ]
};

export default commitFreq_ChartOption;