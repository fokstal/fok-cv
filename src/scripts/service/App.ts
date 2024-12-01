import ComponentFactory from "@scripts/service/ComponentFactory";
import Translator from "@scripts/service/Translator";
import AccessModeWorker from "@scripts/service/AccessModeWorker";
import ImageModalViewer from "@scripts/service/ImageModalViewer";
import PageChanger from "@scripts/service/PageChanger";
import { LANGUAGE_ENUM, PAGE_NAME_ENUM } from "@scripts/const/const";
import sendContactToAdminEmail, { IContactFormProps } from "@scripts/service/ContactForm";
import ContactForm from "@scripts/service/ContactForm";

interface AppConfig {
    componentElSelector: string,
    languageSelectElSelector: string,
    accessModeImgElSelector: string,
    imageModalElSelector: string,
    imageModalContentElSelector: string,
    overlayElSelector: string,
    contactFromProps: IContactFormProps,
}

class App {
    static startPageName = PAGE_NAME_ENUM.home;
    static baseLanguage = LANGUAGE_ENUM.EN;
    static isAccessModeBaseValue = false;

    static async startAsync(config: AppConfig) {

        const componentFactory = new ComponentFactory(config.componentElSelector);
        await componentFactory.initAsync();

        const translator = new Translator(config.languageSelectElSelector, App.baseLanguage);
        const accessModeWorker = new AccessModeWorker(config.accessModeImgElSelector, App.isAccessModeBaseValue);
        const imageModalViewer = new ImageModalViewer(
            config.imageModalElSelector,
            config.imageModalContentElSelector,
            config.overlayElSelector,
        );

        const pageChanger = new PageChanger({
            componentFactory: componentFactory,
            translator: translator,
            imageModalViewer: imageModalViewer,
            basePageName: App.startPageName
        });
        
        const contactForm = new ContactForm(config.contactFromProps);

        window.changePageByLink = pageChanger.changePageByLink.bind(pageChanger);
        window.sendContactToAdminEmail = contactForm.sendEmail;
        window.toggleAccessMode = accessModeWorker.toggleAccessMode;
        window.changeLanguage = translator.changeLanguage;
    }
}

export default App;