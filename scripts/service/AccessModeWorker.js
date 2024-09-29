import { StorageKey, Folder, IconFullName } from "../const/const.js";

class AccessModeWorker {
    accessModeImgEl = null;
    baseValue = false;

    get currentIsAccessMode() {
        return sessionStorage.getItem(StorageKey.session.isAccessMode) === "true";
    }
    set currentIsAccessMode(isAccessMode) {
        sessionStorage.setItem(StorageKey.session.isAccessMode, isAccessMode);
    }

    get currentIconPath() {
        let iconName = this.currentIsAccessMode ? IconFullName.eye : IconFullName.eyeClosed;

        return window.location.origin + Folder.icons + iconName;
    }

    constructor(accessModeImgEl, baseValue = false) {
        if (accessModeImgEl == null)
            throw new Error("AccessModeImgEl is null!");

        if (baseValue != true && baseValue != false)
            throw new Error("BaseValue is incorrect!");

        this.accessModeImgEl = accessModeImgEl;
        this.baseValue = baseValue;

        if (!this.currentIsAccessMode)
            this.currentIsAccessMode = baseValue;

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