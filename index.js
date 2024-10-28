import IndexLayout from "./scripts/service/IndexLayout.js";
import ConfigPageWorker from "./scripts/models/ConfigPageWorker.js";
import { PageName, LanguageEnum } from "./scripts/const/const.js";
import initPageWorker from "./scripts/initPageWorker.js";

async function initialize() {
    const indexLayout = new IndexLayout(document.querySelector(".container"));

    await indexLayout.initAsync();

    const pageWorkerConfig = new ConfigPageWorker(
        indexLayout,
        ".language-button-select-list",
        ".access-mode-button-icon",
        PageName.home,
        LanguageEnum.EN
    );

    initPageWorker(pageWorkerConfig);
}

await initialize();
