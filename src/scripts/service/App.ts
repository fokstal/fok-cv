import ComponentFactory from "@scripts/service/ComponentFactory";
import Translator from "@scripts/service/components/Translator";
import AccessMode from "@scripts/service/components/AccessMode";
import ImageModal from "@scripts/service/components/ImageModal";
import Pages from "@scripts/service/Pages";
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
        const accessMode = new AccessMode(App.isAccessModeBaseValue);
        const imageModal = new ImageModal();

        const pages = new Pages({
            componentFactory: componentFactory,
            translator: translator,
            imageModal: imageModal,
            basePageName: App.startPageName,
        });

        window.changePageByLink = pages.change.bind(pages);
        window.toggleAccessMode = accessMode.toggle;
        window.changeLanguage = translator.changeLanguage;
    }
}

export default App;