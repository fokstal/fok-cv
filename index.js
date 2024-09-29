import ConfigApp from "./scripts/models/ConfigApp.js";
import { PageName, LanguageEnum } from "./scripts/const/const.js";
import initApp from "./scripts/initApp.js";

const config = new ConfigApp(
    ".root",
    "#languageSelect",
    "#accessModeImg",
    PageName.home,
    LanguageEnum.EN
);

await initApp(config);