import { LanguageEnum, StorageKey } from "../../const/const.js";
import translation from "../../const/translation.js";

class LanguageWorker {
    languageSelectEl = null;
    baseLanguage = LanguageEnum.EN;
    #currentLanguage = this.baseLanguage;

    get currentLanguage() {
        return this.#currentLanguage;
    }
    set currentLanguage(language) {
        this.#currentLanguage = language;
        localStorage.setItem(StorageKey.local.currentLanguage, language);
    }

    constructor(languageSelectEl, baseLanguage) {
        this.baseLanguage = baseLanguage;
        this.languageSelectEl = languageSelectEl;
        this.currentLanguage = localStorage.getItem(StorageKey.local.currentLanguage) || baseLanguage;
        this.languageSelectEl.value = this.currentLanguage;
    }

    changeLanguage = () => {
        const selectedLanguage = this.languageSelectEl.options[this.languageSelectEl.selectedIndex].text;

        if (LanguageEnum[selectedLanguage]) {
            document.documentElement.setAttribute("lang", selectedLanguage);
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

        document
            .querySelectorAll("[translate-alt-key]")
            .forEach(el => {
                const translateAltKey = el.getAttribute("translate-alt-key");
                const oldAlt = el.alt;

                el.alt = translation[this.currentLanguage]["imgAlt"][translateAltKey] || oldAlt;
            });

        document
            .querySelectorAll("[translate-chart-title-key]")
            .forEach(el => {
                const translateChartTitleKey = el.getAttribute("translate-chart-title-key");
                const oldChartTitle = el.alt;

                el.innerHTML = translation[this.currentLanguage]["chartTitle"][translateChartTitleKey] || oldChartTitle;
            });
    }
}

export default LanguageWorker;