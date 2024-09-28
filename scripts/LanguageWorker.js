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
        const selectedLang = this.languageSelectEl.options[this.languageSelectEl.selectedIndex].text;

        if (LanguageEnum[selectedLang]) {
            localStorage.setItem(localKey.currentLang, selectedLang);
            return;
        }

        throw new Error("No supported language in select.");
    };
}

export default LanguageWorker;
export { LanguageEnum };