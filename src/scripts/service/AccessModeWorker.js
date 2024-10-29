import { StorageKey, Folder, IconFullName } from "../const/const.js";

class AccessModeWorker {
    accessModeImgEl = null;
    baseValue = false;
    #currentIsAccessMode = this.baseValue;

    get currentIsAccessMode() {
        return this.#currentIsAccessMode;
    }
    set currentIsAccessMode(isAccessMode) {
        this.#currentIsAccessMode = isAccessMode;
        sessionStorage.setItem(StorageKey.session.isAccessMode, isAccessMode);
    }

    get currentIconPath() {
        let iconName = this.currentIsAccessMode ? IconFullName.eye : IconFullName.eyeClosed;

        return window.location.origin + Folder.src + Folder.icons + Folder.any + iconName;
    }

    constructor(accessModeImgEl, baseValue = false) {
        this.accessModeImgEl = accessModeImgEl;
        this.baseValue = baseValue;
        this.currentIsAccessMode = sessionStorage.getItem(StorageKey.session.isAccessMode) === "true" || baseValue;
        this.accessModeImgEl.src = this.currentIconPath;
    }

    toggleAccessMode = () => {
        this.currentIsAccessMode = !this.currentIsAccessMode;

        this.accessModeImgEl.classList.add("fade-out");
        this.accessModeImgEl.addEventListener("transitionend", () => {
            this.accessModeImgEl.src = this.currentIconPath;
            this.accessModeImgEl.classList.remove("fade-out");
        }, { once: true });
    };
}

export default AccessModeWorker;