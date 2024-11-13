import { EChartOption } from "echarts";
import itLang_ChartOption from "@scripts/const/chartOptions/itLang_ChartOption";
import libAndFw_ChartOption from "@scripts/const/chartOptions/libAndFw_ChartOption";
import commitFreq_ChartOption from "@scripts/const/chartOptions/commitFreq_ChartOption";

type ChartOptionModel = {
    [key: string]: EChartOption
}

const ChartOptions: ChartOptionModel = {
    itLanguage: itLang_ChartOption,
    libraryAndFramework: libAndFw_ChartOption,
    commitFrequency: commitFreq_ChartOption,
}

export default ChartOptions;