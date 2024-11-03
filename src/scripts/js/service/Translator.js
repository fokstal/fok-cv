import { LANGUAGE_ENUM, STORAGE_KEYS } from "../const/const.js";
import { convertStringToLanguageEnum } from "../helpers/convertToEnum.js";
import { convertElement, getElementFromDocument } from "../helpers/elements.js";
import translation from "../const/translation.js";
class Translator {
    languageSelectEl;
    baseLanguage = LANGUAGE_ENUM.EN;
    _currentLanguage = this.baseLanguage;
    get currentLanguage() {
        return this._currentLanguage;
    }
    set currentLanguage(language) {
        this._currentLanguage = language;
        localStorage.setItem(STORAGE_KEYS.local.currentLanguage, language);
    }
    constructor(languageSelectElSelector, baseLanguage) {
        this.languageSelectEl = getElementFromDocument(languageSelectElSelector);
        this.baseLanguage = baseLanguage;
        this._currentLanguage =
            convertStringToLanguageEnum(localStorage.getItem(STORAGE_KEYS.local.currentLanguage) || baseLanguage);
        this.languageSelectEl.value = this._currentLanguage;
    }
    changeLanguage = () => {
        const selectedLanguage = convertStringToLanguageEnum(this.languageSelectEl.options[this.languageSelectEl.selectedIndex].text);
        document.documentElement.setAttribute("lang", selectedLanguage);
        this._currentLanguage = selectedLanguage;
        this.translateSiteByCurrentLanguage();
    };
    translateSiteByCurrentLanguage = () => {
        document
            .querySelectorAll("[translate-key]")
            .forEach(el => {
            const translateKey = el.getAttribute("translate-key");
            const oldInnerHtml = el.innerHTML;
            el.innerHTML = translation[this._currentLanguage].innerHtml[translateKey] || oldInnerHtml;
        });
        document
            .querySelectorAll("[translate-title-key]")
            .forEach(el => {
            const htmlEl = convertElement(el);
            const translateTitleKey = htmlEl.getAttribute("translate-title-key");
            const oldTitle = htmlEl.title;
            htmlEl.title = translation[this._currentLanguage].title[translateTitleKey] || oldTitle;
        });
        document
            .querySelectorAll("[translate-alt-key]")
            .forEach(el => {
            const imgEl = convertElement(el);
            const translateAltKey = imgEl.getAttribute("translate-alt-key");
            const oldAlt = imgEl.alt;
            imgEl.alt = translation[this._currentLanguage].imageAlt[translateAltKey] || oldAlt;
        });
        document
            .querySelectorAll("[translate-chart-title-key]")
            .forEach(el => {
            const translateChartTitleKey = el.getAttribute("translate-chart-title-key");
            const oldChartTitle = el.innerHTML;
            el.innerHTML = translation[this._currentLanguage].chartTitle[translateChartTitleKey] || oldChartTitle;
        });
    };
}
export default Translator;
