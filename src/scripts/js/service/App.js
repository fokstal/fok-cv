import ComponentFactory from "./ComponentFactory.js";
import Translator from "./Translator.js";
import AccessModeWorker from "./AccessModeWorker.js";
import ImageModalViewer from "./ImageModalViewer.js";
import PageChanger from "./PageChanger.js";
import { LANGUAGE_ENUM, PAGE_NAME_ENUM } from "../const/const.js";
import sendMessageToEmail from "./functions/sendMessageToEmail.js";
class App {
    static startPageName = PAGE_NAME_ENUM.home;
    static baseLanguage = LANGUAGE_ENUM.EN;
    static isAccessModeBaseValue = false;
    static async startAsync(config) {
        const componentFactory = new ComponentFactory(config.componentElSelector);
        await componentFactory.initAsync();
        const translator = new Translator(config.languageSelectElSelector, App.baseLanguage);
        const accessModeWorker = new AccessModeWorker(config.accessModeImgElSelector, App.isAccessModeBaseValue);
        const imageModalViewer = new ImageModalViewer(config.imageModalElSelector, config.imageModalContentElSelector, config.overlayElSelector);
        const pageChanger = new PageChanger({
            componentFactory: componentFactory,
            translator: translator,
            imageModalViewer: imageModalViewer,
            basePageName: App.startPageName
        });
        window.changePageByLink = pageChanger.changePageByLink.bind(pageChanger);
        window.sendMessageToEmail = sendMessageToEmail;
        window.toggleAccessMode = accessModeWorker.toggleAccessMode;
        window.changeLanguage = translator.changeLanguage;
    }
}
export default App;
