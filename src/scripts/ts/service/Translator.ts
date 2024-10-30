import { LANGUAGE_ENUM, STORAGE_KEYS } from "../const/const.js";
import { convertStringToLanguageEnum } from "../helpers/convertToEnum.js";
import { convertElement, getElementFromDocument } from "../helpers/elements.js";
import translation from "../const/translation.js";
import {
    TranslationModel_ChartTitle,
    TranslationModel_ImageAlt,
    TranslationModel_InnerHtml,
    TranslationModel_Title
} from "../models/TranslationModel.js";

class Translator {
    languageSelectEl: HTMLSelectElement;
    baseLanguage: LANGUAGE_ENUM = LANGUAGE_ENUM.EN;
    private _currentLanguage: LANGUAGE_ENUM = this.baseLanguage;

    get currentLanguage() {
        return this._currentLanguage;
    }
    set currentLanguage(language: LANGUAGE_ENUM) {
        this._currentLanguage = language;
        localStorage.setItem(STORAGE_KEYS.local.currentLanguage, language);
    }

    constructor(languageSelectElSelector: string, baseLanguage: LANGUAGE_ENUM) {
        this.languageSelectEl = getElementFromDocument<HTMLSelectElement>(languageSelectElSelector); // .language-button-select-list
        this.baseLanguage = baseLanguage;
        this._currentLanguage =
            convertStringToLanguageEnum(
                localStorage.getItem(STORAGE_KEYS.local.currentLanguage) || baseLanguage);

        this.languageSelectEl.value = this._currentLanguage;
    }

    changeLanguage = () => {
        const selectedLanguage: LANGUAGE_ENUM =
            convertStringToLanguageEnum(
                this.languageSelectEl.options[this.languageSelectEl.selectedIndex].text);

        document.documentElement.setAttribute("lang", selectedLanguage);

        this._currentLanguage = selectedLanguage;

        this.translateSiteByCurrentLanguage();
    };

    translateSiteByCurrentLanguage = () => {
        document
            .querySelectorAll("[translate-key]")
            .forEach(el => {
                const translateKey = el.getAttribute("translate-key") as keyof TranslationModel_InnerHtml;
                const oldInnerHtml = el.innerHTML;

                el.innerHTML = translation[this._currentLanguage].innerHtml[translateKey] || oldInnerHtml;
            });


        document
            .querySelectorAll("[translate-title-key]")
            .forEach(el => {
                const htmlEl: HTMLElement = convertElement<HTMLElement>(el);

                const translateTitleKey = htmlEl.getAttribute("translate-title-key") as keyof TranslationModel_Title;
                const oldTitle = htmlEl.title;

                htmlEl.title = translation[this._currentLanguage].title[translateTitleKey] || oldTitle;
            });

        document
            .querySelectorAll("[translate-alt-key]")
            .forEach(el => {
                const imgEl: HTMLImageElement = convertElement<HTMLImageElement>(el);

                const translateAltKey = imgEl.getAttribute("translate-alt-key") as keyof TranslationModel_ImageAlt;
                const oldAlt = imgEl.alt;

                imgEl.alt = translation[this._currentLanguage].imageAlt[translateAltKey] || oldAlt;
            });

        document
            .querySelectorAll("[translate-chart-title-key]")
            .forEach(el => {
                const translateChartTitleKey = el.getAttribute("translate-chart-title-key") as keyof TranslationModel_ChartTitle;
                const oldChartTitle = el.innerHTML;

                el.innerHTML = translation[this._currentLanguage].chartTitle[translateChartTitleKey] || oldChartTitle;
            });
    }
}

export default Translator;