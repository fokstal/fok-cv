import { PageName, LanguageEnum } from "../const/const.js";
import IndexLayout from "../service/IndexLayout.js";

class ConfigPageWorker {
    indexLayout = null;

    elementList = {
        languageSelect: null,
        accessModeImg: null,
    };

    startPageName = PageName.home;
    baseLanguage = LanguageEnum.EN;

    constructor(indexLayout, languageSelector, accessModeImgSelector, startPageName, baseLanguage) {
        if (!indexLayout instanceof IndexLayout)
            throw new Error("INDEX_LAYOUT type is incorrect!");
        
        const languageSelect = indexLayout.container.querySelector(languageSelector);
        const accessModeImg = indexLayout.container.querySelector(accessModeImgSelector);
        
        if (languageSelect == null) throw new Error("LANGUAGE_SELECT init failed!");
        if (accessModeImg == null) throw new Error("ACCESS_MODE_IMG init failed!");
        if (!PageName[startPageName]) throw new Error("START_PAGE_NAME is incorrect!");
        if (!LanguageEnum[baseLanguage]) throw new Error("BASE_LANGUAGE is incorrect!");

        this.indexLayout = indexLayout;

        this.elementList = {
            languageSelect: indexLayout.container.querySelector(languageSelector),
            accessModeImg: indexLayout.container.querySelector(accessModeImgSelector),
        };

        this.startPageName = startPageName;
        this.baseLanguage = baseLanguage;

        Object.freeze(this.elementList);
    }
}

export default ConfigPageWorker;