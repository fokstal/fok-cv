import ComponentFactory from "@scripts/service/ComponentFactory";
import Translator from "@scripts/service/components/Translator";
import AccessMode from "@scripts/service/AccessMode";
import ImageModal from "@scripts/service/components/ImageModal";
import PageChanger from "@scripts/service/PageChanger";
import { LANGUAGE_ENUM, PAGE_NAME_ENUM } from "@scripts/const/const";
import { convertStringToLanguageEnum } from "@scripts/helpers/convertToEnum";

interface AppConfig {
    componentElSelector: string,
    languageSelectElSelector: string,
    accessModeImgElSelector: string,
    imageModalElSelector: string,
    imageModalContentElSelector: string,
    overlayElSelector: string,
}

class App {
    static startPageName = PAGE_NAME_ENUM.home;
    static baseLanguage = LANGUAGE_ENUM.EN;
    static isAccessModeBaseValue = false;

    static async startAsync(config: AppConfig) {
        try {
            App.baseLanguage = convertStringToLanguageEnum(navigator.language);
        }
        catch {
            App.baseLanguage = LANGUAGE_ENUM.EN;
        }

        const componentFactory = new ComponentFactory(config.componentElSelector);
        await componentFactory.initAsync();

        const translator = new Translator(App.baseLanguage);
        const accessModeWorker = new AccessMode(App.isAccessModeBaseValue);
        const imageModalViewer = new ImageModal();

        const pageChanger = new PageChanger({
            componentFactory: componentFactory,
            translator: translator,
            imageModalViewer: imageModalViewer,
            basePageName: App.startPageName,
        });

        window.changePageByLink = pageChanger.changePageByLink.bind(pageChanger);
        window.toggleAccessMode = accessModeWorker.toggle;
        window.changeLanguage = translator.changeLanguage;
    }
}

export default App;