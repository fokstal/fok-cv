import getRandomHEXColor from "@scripts/helpers/getRandomHEXColor";
import { EChartOption } from "echarts";

const color = getRandomHEXColor();

const itLangFreq_ChartOption: EChartOption = {
    tooltip: {
        trigger: "item"
    },

    visualMap: {
        show: false,
        min: 0,
        max: 100,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series: [
        {
            type: "pie",
            center: ["50%", "50%"],
            data: [
                { value: 36.83, name: "HTML" },
                { value: 23.07, name: "C#" },
                { value: 20.03, name: "JS" },
                { value: 11.88, name: "CSS" },
                { value: 8.14, name: "TS" },
                { value: 0.09, name: "..." },
            ].sort(function (a, b) {
                return a.value - b.value;
            }),
            roseType: "radius",
            label: {
                fontSize: 12,
                color: "#43434370",
            },
            labelLine: {
                smooth: 0.2,
                length: 10,
                length2: 20
            },
            itemStyle: {
                color: color,
            },

            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function (params: any) {
                return Math.random() * 200;
            }
        }
    ]
};

export default itLangFreq_ChartOption;