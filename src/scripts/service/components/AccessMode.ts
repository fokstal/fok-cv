import { STORAGE_KEYS, FOLDERS, ICON_FULLNAMES } from "@scripts/const/const";
import Layout from "@scripts/service/Layout";

type AccessModeElementListType = {
    button: HTMLImageElement,
}

type AccessModeSelectorForElementListType = {
    button: string,
}

const default_accessModeSelectorForElementList: AccessModeSelectorForElementListType = {
    button: ".access-mode-button-icon",
}

class AccessMode {
    private _elementList: AccessModeElementListType;
    private _isAccessModeBaseValue: boolean = false;
    private _isAccessMode: boolean = this._isAccessModeBaseValue;

    public get IsAccessMode() {
        return this._isAccessMode;
    }

    public set IsAccessMode(isAccessMode: boolean) {
        this._isAccessMode = isAccessMode;
        sessionStorage.setItem(STORAGE_KEYS.session.isAccessMode, String(isAccessMode));
    }

    public get IconPath() {
        let iconName = this.IsAccessMode ? ICON_FULLNAMES.eye : ICON_FULLNAMES.eyeClosed;

        return window.location.href + FOLDERS.icons.any + iconName;
    }

    public constructor(
        isAccessModeBaseValue: boolean = false,
        selectorForElementList: AccessModeSelectorForElementListType = default_accessModeSelectorForElementList
    ) {
        this._elementList = Layout.getElementsBySelectorList
            <AccessModeElementListType, AccessModeSelectorForElementListType>(selectorForElementList);
        this._isAccessModeBaseValue = isAccessModeBaseValue;

        this.IsAccessMode = sessionStorage.getItem(STORAGE_KEYS.session.isAccessMode) === "true" || isAccessModeBaseValue;
        this._elementList.button.src = this.IconPath;
    }

    public toggle = () => {
        this.IsAccessMode = !this.IsAccessMode;

        this._elementList.button.classList.add("access-mode-button-icon--fade-out");

        this._elementList.button.addEventListener("transitionend", () => {
            this._elementList.button.src = this.IconPath;
            this._elementList.button.classList.remove("access-mode-button-icon--fade-out");
        }, { once: true });
    };
}

export default AccessMode;