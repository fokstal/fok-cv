import translation from "./translation.js";

const LanguageEnum = Object.freeze({
    BY: 'BY',
    EN: 'EN',
    RU: 'RU',
});

const localKey = {
    currentLang: "currentLang",
}

class LanguageWorker {
    languageSelectEl = null;
    baseLanguage = LanguageEnum.EN;

    constructor(languageSelectEl, baseLanguage = null) {
        if (!languageSelectEl)
            throw new Error("LangSelect is null!");

        if (LanguageEnum[baseLanguage])
            this.baseLanguage = baseLanguage;

        this.languageSelectEl = languageSelectEl;

        if (!localStorage.getItem(localKey.currentLang))
            localStorage.setItem(localKey.currentLang, LanguageEnum.EN);

        this.languageSelectEl.value = localStorage.getItem(localKey.currentLang);
    }

    changeLanguage = () => {
        const selectedLanguage = this.languageSelectEl.options[this.languageSelectEl.selectedIndex].text;

        if (LanguageEnum[selectedLanguage]) {
            localStorage.setItem(localKey.currentLang, selectedLanguage);
            this.translateSite(selectedLanguage);
            return;
        }

        throw new Error("No supported language in select.");
    };

    translateSite = () => {
        const currentLanguage = localStorage.getItem(localKey.currentLang);

        document
            .querySelectorAll("[translate-key]")
            .forEach(el => {
                const translateKey = el.getAttribute("translate-key");
                const oldInnerHtml = el.innerHTML;

                el.innerHTML = translation[currentLanguage][translateKey] || oldInnerHtml;
            });

        document
            .querySelectorAll("[translate-title-key]")
            .forEach(el => {
                const translateTitleKey = el.getAttribute("translate-title-key");
                const oldTitle = el.title;

                el.title = translation[currentLanguage]["title"][translateTitleKey] || oldTitle;
            });
    }
}

export default LanguageWorker;
export { LanguageEnum };