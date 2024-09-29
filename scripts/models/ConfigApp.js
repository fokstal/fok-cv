import { PageName, LanguageEnum } from "../const/const.js";

class ConfigApp {
    elementList = {
        root: null,
        languageSelect: null,
        accessModeImg: null,
    };

    startPageName = PageName.home;
    baseLanguage = LanguageEnum.EN;

    constructor(rootSelector, languageSelector, accessModeImgSelector, startPageName, baseLanguage) {
        const root = document.querySelector(rootSelector);
        const languageSelect = document.querySelector(languageSelector);
        const accessModeImg = document.querySelector(accessModeImgSelector);

        if (root == null) throw new Error("ROOT init failed!");
        if (languageSelect == null) throw new Error("LANGUAGE_SELECT init failed!");
        if (accessModeImg == null) throw new Error("ACCESS_MODE_IMG init failed!");
        if (!PageName[startPageName]) throw new Error("START_PAGE_NAME is incorrect!");
        if (!LanguageEnum[baseLanguage]) throw new Error("BASE_LANGUAGE is incorrect!");

        this.elementList = {
            root: document.querySelector(rootSelector),
            languageSelect: document.querySelector(languageSelector),
            accessModeImg: document.querySelector(accessModeImgSelector),
        };

        this.startPageName = startPageName;
        this.baseLanguage = baseLanguage;
    }
}

export default ConfigApp;