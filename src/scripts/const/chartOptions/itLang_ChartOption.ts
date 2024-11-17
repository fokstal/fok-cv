import { EChartOption } from "echarts";
import getRandomHEXColor from "@scripts/helpers/getRandomHEXColor";
import getAnimalByYear from "@scripts/helpers/getAnimalByYear";
import Layout from "@scripts/service/Layout";

const itLanguageIndicatorList = [
    { name: "C#", max: 10 },
    { name: "JS", max: 10 },
    { name: "XAML", max: 10 },
    { name: "HTML&CSS", max: 10 },
    { name: "SQL", max: 10 },
];

const colorFor2024 = getRandomHEXColor();
const colorFor2022 = getRandomHEXColor();

const itLang_ChartOption: EChartOption = {
    tooltip: {
        trigger: "item",
        formatter: (params: any) => {
            const seriesName = params.seriesName;
            let formattedParamsValue = "";

            for (let i = 0; i < params.value.length; i++)
                formattedParamsValue += `${itLanguageIndicatorList[i].name}: <strong>${params.value[i]}</strong> <br>`;
            
            return Layout.getChartTooltip(formattedParamsValue, `${seriesName}. ${getAnimalByYear(seriesName)}`);
        }
    },
    radar: {
        indicator: itLanguageIndicatorList,
        axisName: {
            fontSize: 14,
        },
        splitNumber: 5,
        axisNameGap: 30,
        axisLabel: {
            show: true,
            customValues: [10],
            margin: 10,
            fontSize: 8,
        },
    },
    series: [
        {
            name: "2022",
            type: "radar",
            areaStyle: {
                // color: "#FCDC9480",
                color: colorFor2022 + "30",
            },
            itemStyle: {
                // color: "#FCDC94",
                color: colorFor2022,
            },
            symbol: "roundRect",
            data: [
                {
                    value: [4, 2, 3, 1, 4],
                },
            ],
            label: {
                show: true,
            },
            z: 2,
        },
        {
            name: "2024",
            type: "radar",
            areaStyle: {
                // color: "#65814730",
                color: colorFor2024 + "30",
            },
            itemStyle: {
                // color: "#658147",
                color: colorFor2024,
            },
            symbol: "roundRect",
            data: [
                {
                    value: [9, 6, 4, 8, 5],
                },
            ],
            label: {
                show: true,
            },
            z: 1,
        },
    ]
};

export default itLang_ChartOption;