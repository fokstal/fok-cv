import { STORAGE_KEYS, FOLDERS, ICON_FULLNAMES } from "../const/const";
import { getElementFromDocument } from "../helpers/elements";

class AccessModeWorker {
    accessModeImgEl: HTMLImageElement;
    isAccessModeBaseValue: boolean = false;
    private _currentIsAccessMode: boolean = this.isAccessModeBaseValue;

    get currentIsAccessMode() {
        return this._currentIsAccessMode;
    }

    set currentIsAccessMode(isAccessMode: boolean) {
        this._currentIsAccessMode = isAccessMode;
        sessionStorage.setItem(STORAGE_KEYS.session.isAccessMode, String(isAccessMode));
    }

    get currentIconPath() {
        let iconName = this.currentIsAccessMode ? ICON_FULLNAMES.eye : ICON_FULLNAMES.eyeClosed;

        return window.location.origin + FOLDERS.icons.any + iconName;
    }

    constructor(accessModeImgElSelector: string, isAccessModeBaseValue: boolean = false) {
        this.accessModeImgEl = getElementFromDocument<HTMLImageElement>(accessModeImgElSelector);
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