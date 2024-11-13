import { EChartOption } from "echarts";

const libAndFw_ChartOption: EChartOption = {
    xAxis: {
        type: "value",
        max: 10,
    },
    yAxis: {
        type: "category",
        data: ["ASP.NET Core", "EF Core", "WPF", "React", "TypeScript"],
    },
    series: [
        {
            data: [7, 4, 4, 3, 8],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
                color: "rgba(180, 180, 180, 0.2)"
            },
        }
    ]
};

export default libAndFw_ChartOption;