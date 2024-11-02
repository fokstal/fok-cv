import App from "./service/App.js";
const app = new App({
    componentElSelector: ".component",
    languageSelectElSelector: ".language-button-select-list",
    accessModeImgElSelector: ".access-mode-button-icon",
    imageModalElSelector: ".image-modal",
    imageModalContentElSelector: ".image-modal__content",
    overlayElSelector: "overlay",
});
await app.startAsync();
