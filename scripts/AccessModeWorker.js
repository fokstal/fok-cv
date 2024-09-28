const sessionKey = {
    isAccessMode: "isAccessMode",
}

class AccessModeWorker {
    accessModeImgEl = null;
    baseValue = false;
    isAccessMode = this.baseValue;

    get currentIconPath() {
        let iconName = this.isAccessMode ? "eye.svg" : "eye-closed.svg";

        return window.location.origin + "/icons/" + iconName;
    }

    constructor(accessModeImgEl, baseValue = false) {
        if (!accessModeImgEl)
            throw new Error("AccessModeImgEl is null!");

        if (baseValue != true && baseValue != false)
            throw new Error("BaseValue is incorrect!");

        this.accessModeImgEl = accessModeImgEl;
        this.baseValue = baseValue;

        if (!sessionStorage.getItem(sessionKey.isAccessMode))
            sessionStorage.setItem(sessionKey.isAccessMode, baseValue)

        this.isAccessMode = sessionStorage.getItem(sessionKey.isAccessMode) === "true";
        
        this.accessModeImgEl.src = this.currentIconPath;
    }

    toggleAccessMode = () => {
        this.isAccessMode = !this.isAccessMode;

        this.accessModeImgEl.classList.add('fade-out');

        this.accessModeImgEl.addEventListener('transitionend', () => {
            this.accessModeImgEl.src = this.currentIconPath;
            this.accessModeImgEl.classList.remove('fade-out');

            sessionStorage.setItem(sessionKey.isAccessMode, this.isAccessMode);
        }, { once: true });
    };
}

export default AccessModeWorker;