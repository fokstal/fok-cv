import { LANGUAGE_ENUM, STORAGE_KEYS } from "@scripts/const/const";
import { convertStringToLanguageEnum } from "@scripts/helpers/convertToEnum";
import { convertElement } from "@scripts/helpers/elements";
import translation from "@scripts/const/translation";
import {
    TranslationModel_ChartTitle,
    TranslationModel_ImageAlt,
    TranslationModel_InnerHtml,
    TranslationModel_Title
} from "@scripts/models/TranslationModel";
import Layout from "@scripts/service/Layout";

type TranslatorElementListType = {
    selectList: HTMLSelectElement,
}

type TranslatorSelectorForElementListType = {
    selectList: string,
}

const default_translatorSelectorForElementList: TranslatorSelectorForElementListType = {
    selectList: "#languageSelectList",
}

class Translator {
    private _elementList: TranslatorElementListType;
    private _baseLanguage: LANGUAGE_ENUM = LANGUAGE_ENUM.EN;
    private _currentLanguage: LANGUAGE_ENUM = this._baseLanguage;

    public get CurrentLanguage() {
        return this._currentLanguage;
    }
    public set CurrentLanguage(language: LANGUAGE_ENUM) {
        this._currentLanguage = language;
        localStorage.setItem(STORAGE_KEYS.local.currentLanguage, language);
    }

    public static get CurrentLanguageFromStorage(): LANGUAGE_ENUM {
        return convertStringToLanguageEnum(localStorage.getItem(STORAGE_KEYS.local.currentLanguage) || LANGUAGE_ENUM.EN);
    }

    public constructor(
        baseLanguage: LANGUAGE_ENUM,
        selectorForElementList: TranslatorSelectorForElementListType = default_translatorSelectorForElementList,
    ) {
        this._elementList = Layout.getElementsBySelectorList
            <TranslatorElementListType, TranslatorSelectorForElementListType>(selectorForElementList);
        this._baseLanguage = baseLanguage;
        this._currentLanguage =
            convertStringToLanguageEnum(
                localStorage.getItem(STORAGE_KEYS.local.currentLanguage) || baseLanguage);

        this._elementList.selectList.value = this._currentLanguage;
    }

    public changeLanguage = () => {
        const selectedLanguage: LANGUAGE_ENUM =
            convertStringToLanguageEnum(
                this._elementList.selectList.options[this._elementList.selectList.selectedIndex].value);

        document.documentElement.setAttribute("lang", selectedLanguage);

        this.CurrentLanguage = selectedLanguage;

        this.translateSite();
    };

    public translateSite = () => {
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