import App from "@scripts/service/App";
import "@styles/index.scss";

await App.startAsync({
    componentElSelector: ".container",
    languageSelectElSelector: ".language-button-select-list",
    accessModeImgElSelector: ".access-mode-button-icon",
    imageModalElSelector: ".image-modal",
    imageModalContentElSelector: ".image-modal__content",
    overlayElSelector: ".overlay",
});