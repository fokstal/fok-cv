import Layout from "./Layout.js";
import sendMessageToEmail from "./email.js";

const container = document.querySelector(".container");

const layout = new Layout(container, "home");
await layout.init();

window.changePageByLink = layout.changePageByLink.bind(layout);
window.sendMessageToEmail = sendMessageToEmail;

// LANGUAGE & ACCESS MODE
const langSelect = document.querySelector("#langSelect");
const accessModeImg = document.querySelector("#accessModeImg");

const LanguageEnum = Object.freeze({
    BY: 'BY',
    EN: 'EN',
    RU: 'RU',
});
const localKey = {
    currentLang: "currentLang",
}

const sessionKey = {
    isAccessMode: "isAccessMode",
}

if (!sessionStorage.getItem(sessionKey.isAccessMode))
    sessionStorage.setItem(sessionKey.isAccessMode, false)

if (!localStorage.getItem(localKey.currentLang))
    localStorage.setItem(localKey.currentLang, LanguageEnum.EN);

langSelect.value = localStorage.getItem(localKey.currentLang);
let isAccessMode = sessionStorage.getItem(sessionKey.isAccessMode) === "true";

let iconName = isAccessMode ? "eye.svg" : "eye-closed.svg";
accessModeImg.src = window.location.origin + "/icons/" + iconName;

const toggleAccessMode = () => {
    isAccessMode = !isAccessMode;

    accessModeImg.classList.add('fade-out');

    accessModeImg.addEventListener('transitionend', function () {
        iconName = isAccessMode ? "eye.svg" : "eye-closed.svg";

        accessModeImg.src = window.location.origin + "/icons/" + iconName;
        accessModeImg.classList.remove('fade-out');

        sessionStorage.setItem(sessionKey.isAccessMode, isAccessMode);
    }, { once: true });
};


const changeLanguage = () => {
    const selectedLang = langSelect.options[langSelect.selectedIndex].text;

    if (LanguageEnum[selectedLang]) {
        localStorage.setItem(localKey.currentLang, selectedLang);
        return;
    }

    throw new Error("No supported language in select.");
};

window.toggleAccessMode = toggleAccessMode;
window.changeLanguage = changeLanguage;