import { LanguageEnum, StorageKey } from "../const/const.js";
import translation from "../const/translation.js";

class LanguageWorker {
    languageSelectEl = null;
    baseLanguage = LanguageEnum.EN;

    get currentLanguage() {
        return localStorage.getItem(StorageKey.local.currentLanguage);
    }
    set currentLanguage(language) {
        localStorage.setItem(StorageKey.local.currentLanguage, language);
    }

    constructor(languageSelectEl, baseLanguage) {
        if (languageSelectEl == null || LanguageEnum[baseLanguage] == null)
            throw new Error("Init values is failed!");

        this.baseLanguage = baseLanguage;
        this.languageSelectEl = languageSelectEl;

        if (this.currentLanguage == null)
            this.currentLanguage = this.baseLanguage;

        this.languageSelectEl.value = this.currentLanguage;
    }

    changeLanguage = () => {
        const selectedLanguage = this.languageSelectEl.options[this.languageSelectEl.selectedIndex].text;

        if (LanguageEnum[selectedLanguage]) {
            this.currentLanguage = selectedLanguage;
            this.translateSite(selectedLanguage);
            return;
        }

        throw new Error("No supported language in select!");
    };

    translateSite = () => {
        document
            .querySelectorAll("[translate-key]")
            .forEach(el => {
                const translateKey = el.getAttribute("translate-key");
                const oldInnerHtml = el.innerHTML;

                el.innerHTML = translation[this.currentLanguage][translateKey] || oldInnerHtml;
            });

        document
            .querySelectorAll("[translate-title-key]")
            .forEach(el => {
                const translateTitleKey = el.getAttribute("translate-title-key");
                const oldTitle = el.title;

                el.title = translation[this.currentLanguage]["title"][translateTitleKey] || oldTitle;
            });
    }
}

export default LanguageWorker;