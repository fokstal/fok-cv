import IndexLayout from "./service/IndexLayout.js";
import ConfigPageWorker from "./models/ConfigPageWorker.js";
import { PageName, LanguageEnum } from "./const/const.js";
import initPageWorker from "./initPageWorker.js";

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
