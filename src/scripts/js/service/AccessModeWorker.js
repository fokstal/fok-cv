import { STORAGE_KEYS, FOLDERS, ICON_FULLNAMES } from "../const/const.js";
import { getElementFromDocument } from "../helpers/elements.js";
class AccessModeWorker {
    accessModeImgEl;
    isAccessModeBaseValue = false;
    _currentIsAccessMode = this.isAccessModeBaseValue;
    get currentIsAccessMode() {
        return this._currentIsAccessMode;
    }
    set currentIsAccessMode(isAccessMode) {
        this._currentIsAccessMode = isAccessMode;
        sessionStorage.setItem(STORAGE_KEYS.session.isAccessMode, String(isAccessMode));
    }
    get currentIconPath() {
        let iconName = this.currentIsAccessMode ? ICON_FULLNAMES.eye : ICON_FULLNAMES.eyeClosed;
        return window.location.origin + FOLDERS.icons.any + iconName;
    }
    constructor(accessModeImgElSelector, isAccessModeBaseValue = false) {
        this.accessModeImgEl = getElementFromDocument(accessModeImgElSelector);
        this.isAccessModeBaseValue = isAccessModeBaseValue;
        this.currentIsAccessMode = sessionStorage.getItem(STORAGE_KEYS.session.isAccessMode) === "true" || isAccessModeBaseValue;
        this.accessModeImgEl.src = this.currentIconPath;
    }
    toggleAccessMode = () => {
        this.currentIsAccessMode = !this.currentIsAccessMode;
        this.accessModeImgEl.classList.add("access-mode-button-icon--fade-out");
        this.accessModeImgEl.addEventListener("transitionend", () => {
            this.accessModeImgEl.src = this.currentIconPath;
            this.accessModeImgEl.classList.remove("access-mode-button-icon--fade-out");
        }, { once: true });
    };
}
export default AccessModeWorker;
