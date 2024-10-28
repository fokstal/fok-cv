import Layout from "./service/Layout.js";
import sendMessageToEmail from "./service/email.js";
import LanguageWorker from "./service/LanguageWorker.js";
import AccessModeWorker from "./service/AccessModeWorker.js";
import ConfigApp from "./models/ConfigApp.js";

const initApp = async (config) => {
    if (!config instanceof ConfigApp)
        throw new Error("CONFIG_TYPE is incorrect!");

    const root = config.elementList.root;

    const languageWorker = new LanguageWorker(config.elementList.languageSelect, config.baseLanguage)
    const accessModeWorker = new AccessModeWorker(config.elementList.accessModeImg);

    const layout = new Layout(root, config.startPageName, languageWorker);
    await layout.init();

    window.changePageByLink = layout.changePageByLink.bind(layout);
    window.sendMessageToEmail = sendMessageToEmail;
    window.toggleAccessMode = accessModeWorker.toggleAccessMode;
    window.changeLanguage = languageWorker.changeLanguage;
}

export default initApp;