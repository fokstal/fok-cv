import { EChartOption } from "echarts";
import getRandomHEXColor from "@scripts/helpers/getRandomHEXColor";

const libAndFw_ChartOption: EChartOption = {
    tooltip: {
        trigger: "item",
        formatter: (params: any) => {
            return `Skills is <strong>${params.value}</strong>`;
        }
    },
    xAxis: {
        type: "value",
        max: 10,
    },
    yAxis: {
        type: "category",
        nameTextStyle: {
            fontSize: 20,
        },
        data: ["ASP.NET Core", "EF Core", "WPF", "React", "TypeScript",],
    },
    series: [
        {
            itemStyle: {
                // color: "#C9686830",
                color: () => {
                    const color = getRandomHEXColor();

                    return color + "30";
                },
                borderColor: "#B4B4B8",
                borderWidth: 1,
                borderRadius: [0, 5, 5, 0],
            },
            type: "bar",
            data: [7, 4, 4, 3, 8],
        }
    ]
};

export default libAndFw_ChartOption;