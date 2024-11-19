import { EChartOption } from "echarts";
import getRandomHEXColor from "@scripts/helpers/getRandomHEXColor";
import Layout from "@scripts/service/Layout";

const libAndFwNames = ["ASP.NET Core", "EF Core", "WPF", "React", "TypeScript",];
const libAndFwValues = [7, 4, 4, 3, 8];

const combinedData = libAndFwNames.map((name, index) => ({
    name,
    value: libAndFwValues[index],
}));

combinedData.sort((a, b) => a.value - b.value);

const sortedNames = combinedData.map(item => item.name);
const sortedValues = combinedData.map(item => item.value);

const libAndFw_ChartOption: EChartOption = {
    tooltip: {
        trigger: "item",
        formatter: (params: any) => {
            return Layout.getChartTooltip(`${params.name}: <strong>${params.value}</strong>`);
        }
    },
    xAxis: {
        type: "value",
        max: 10,
        axisLabel: {
            fontSize: 12,
            color: "#43434370",
        },
    },
    yAxis: {
        type: "category",
        nameTextStyle: {
            fontSize: 20,
        },
        data: sortedNames,
        axisLabel: {
            fontSize: 12,
            color: "#43434370",
        },
    },
    visualMap: [
        {
            show: false,
            min: 0,
            max: 10,
            inRange: {
                color: [getRandomHEXColor() + "80", getRandomHEXColor() + "80", getRandomHEXColor() + "80"]
            },
        },
    ],
    series: [
        {
            itemStyle: {
                borderRadius: [0, 5, 5, 0],
            },
            type: "bar",
            data: sortedValues,
        }
    ]
};

export default libAndFw_ChartOption;