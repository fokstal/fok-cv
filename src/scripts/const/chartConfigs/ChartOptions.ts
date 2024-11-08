import { ChartConfiguration } from "chart.js";
import itLang_ChartConfig from "./itLang_ChartConfig";
import libAndFw_ChartConfig from "./libAndFw_ChartConfig";
import commitFreq_ChartConfig from "./commitFreq_ChartConfig";

type ChartConfigModel = {
    [key: string]: ChartConfiguration
}

const ChartConfigs: ChartConfigModel = {
    itLanguage: itLang_ChartConfig,
    libraryAndFramework: libAndFw_ChartConfig,
    commitFrequency: commitFreq_ChartConfig,
}

export default ChartConfigs;