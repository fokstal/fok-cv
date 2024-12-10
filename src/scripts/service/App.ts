import ComponentFactory from "@scripts/service/ComponentFactory";
import Translator from "@scripts/service/components/Translator";
import AccessMode from "@scripts/service/components/AccessMode";
import ImageModal from "@scripts/service/components/ImageModal";
import PageChanger from "@scripts/service/PageChanger";
import { LANGUAGE_ENUM, PAGE_NAME_ENUM } from "@scripts/const/const";
import { convertStringToLanguageEnum } from "@scripts/helpers/convertToEnum";

class App {
    public static startPageName = PAGE_NAME_ENUM.home;
    public static baseLanguage = LANGUAGE_ENUM.EN;
    public static isAccessModeBaseValue = false;

    public static async startAsync() {
        try {
            App.baseLanguage = convertStringToLanguageEnum(navigator.language);
        }
        catch {
            App.baseLanguage = LANGUAGE_ENUM.EN;
        }

        const componentFactory = new ComponentFactory();
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