import PageWorker from "./service/PageWorker.js";
import sendMessageToEmail from "./service/email.js";
import LanguageWorker from "./service/LanguageWorker.js";
import AccessModeWorker from "./service/AccessModeWorker.js";
import ConfigPageWorker from "./models/ConfigPageWorker.js";

const initPageWorker = (config) => {
    if (!config instanceof ConfigPageWorker)
        throw new Error("CONFIG_TYPE is incorrect!");

    const languageWorker = new LanguageWorker(config.elementList.languageSelect, config.baseLanguage)
    const accessModeWorker = new AccessModeWorker(config.elementList.accessModeImg);

    const pageWorker = new PageWorker(config.indexLayout, config.startPageName, languageWorker);
    
    pageWorker.init();

    window.changePageByLink = pageWorker.changePageByLink.bind(pageWorker);
    window.sendMessageToEmail = sendMessageToEmail;
    window.toggleAccessMode = accessModeWorker.toggleAccessMode;
    window.changeLanguage = languageWorker.changeLanguage;
}

export default initPageWorker;