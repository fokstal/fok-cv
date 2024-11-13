import { EChartOption } from "echarts";

const itLang_ChartOption: EChartOption = {
    radar: {
        indicator: [
            { name: "C#", max: 10 },
            { name: "JS", max: 10 },
            { name: "XAML", max: 10 },
            { name: "HTML&CSS", max: 10 },
            { name: "SQL", max: 10 },
        ]
    },
    series: [
        {
            type: "radar",
            data: [
                {
                    value: [9, 6, 4, 8, 5],
                    name: "IT Languages skill"
                },
            ],
            
        }
    ]
};

export default itLang_ChartOption;