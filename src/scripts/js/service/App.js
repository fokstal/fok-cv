import ComponentFactory from "./ComponentFactory.js";
import Translator from "./Translator.js";
import AccessModeWorker from "./AccessModeWorker.js";
import ImageModalViewer from "./ImageModalViewer.js";
import PageChanger from "./PageChanger.js";
import { LANGUAGE_ENUM, PAGE_NAME_ENUM } from "../const/const.js";
import sendMessageToEmail from "./functions/sendMessageToEmail.js";
class App {
    componentFactory;
    translator;
    accessModeWorker;
    imageModalViewer;
    pageChanger;
    static startPageName = PAGE_NAME_ENUM.home;
    static baseLanguage = LANGUAGE_ENUM.EN;
    static isAccessModeBaseValue = false;
    constructor(config) {
        this.componentFactory = new ComponentFactory(config.componentElSelector);
        this.translator = new Translator(config.languageSelectElSelector, App.baseLanguage);
        this.accessModeWorker = new AccessModeWorker(config.accessModeImgElSelector, App.isAccessModeBaseValue);
        this.imageModalViewer = new ImageModalViewer(config.imageModalElSelector, config.imageModalContentElSelector, config.overlayElSelector);
    }
    async startAsync() {
        await this.componentFactory.initAsync();
        this.pageChanger = new PageChanger({
            componentFactory: this.componentFactory,
            translator: this.translator,
            imageModalViewer: this.imageModalViewer,
            basePageName: App.startPageName
        });
        window.changePageByLink = this.pageChanger.changePageByLink.bind(this.pageChanger);
        window.sendMessageToEmail = sendMessageToEmail;
        window.toggleAccessMode = this.accessModeWorker.toggleAccessMode;
        window.changeLanguage = this.translator.changeLanguage;
    }
}
export default App;
