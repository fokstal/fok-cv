import { EChartOption } from "echarts";
import itLang_ChartOption from "@scripts/const/chartConfigs/itLang_ChartOption";
import libAndFw_ChartOption from "@scripts/const/chartConfigs/libAndFw_ChartOption";
import commitFreq_ChartOption from "@scripts/const/chartConfigs/commitFreq_ChartOption";

type ChartOptionModel = {
    [key: string]: EChartOption
}

const ChartOptions: ChartOptionModel = {
    itLanguage: itLang_ChartOption,
    libraryAndFramework: libAndFw_ChartOption,
    commitFrequency: commitFreq_ChartOption,
}

export default ChartOptions;