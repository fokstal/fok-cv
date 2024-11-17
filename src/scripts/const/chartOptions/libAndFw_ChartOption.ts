import { EChartOption } from "echarts";
import getRandomHEXColor from "@scripts/helpers/getRandomHEXColor";
import Layout from "@scripts/service/Layout";

const libAndFwData = ["ASP.NET Core", "EF Core", "WPF", "React", "TypeScript",];
const libAndFwColors = libAndFwData.map(() => getRandomHEXColor())

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
    },
    yAxis: {
        type: "category",
        nameTextStyle: {
            fontSize: 20,
        },
        data: libAndFwData,
    },
    series: [
        {
            itemStyle: {
                // color: "#C9686830",
                color: (params: any) => {
                    return libAndFwColors[params.dataIndex] + "80";
                },
                borderColor: "#484848",
                borderWidth: .5,
                borderRadius: [0, 5, 5, 0],
            },
            type: "bar",
            data: [7, 4, 4, 3, 8],
        }
    ]
};

export default libAndFw_ChartOption;