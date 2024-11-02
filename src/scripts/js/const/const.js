var LANGUAGE_ENUM;
(function (LANGUAGE_ENUM) {
    LANGUAGE_ENUM["BY"] = "BY";
    LANGUAGE_ENUM["EN"] = "EN";
    LANGUAGE_ENUM["RU"] = "RU";
})(LANGUAGE_ENUM || (LANGUAGE_ENUM = {}));
var PAGE_NAME_ENUM;
(function (PAGE_NAME_ENUM) {
    PAGE_NAME_ENUM["home"] = "home";
    PAGE_NAME_ENUM["exp"] = "exp";
    PAGE_NAME_ENUM["about"] = "about";
    PAGE_NAME_ENUM["contact"] = "contact";
})(PAGE_NAME_ENUM || (PAGE_NAME_ENUM = {}));
const STORAGE_KEYS = {
    local: {
        currentLanguage: "currentLanguage",
    },
    session: {
        currentPage: "currentPage",
        isAccessMode: "isAccessMode",
    },
};
const FOLDERS = {
    src: "/src/",
    icons: {
        index: "/src/icons/",
        any: "/src/icons/any/"
    },
    components: {
        index: "/src/components/",
        pages: "/src/components/pages/",
    },
};
const ICON_FULLNAMES = {
    eye: "eye.svg",
    eyeClosed: "eye-closed.svg",
};
const COMPONENT_NAMES = {
    header: "header",
    pages: {
        home: "home",
        exp: "exp",
        about: "about",
        contact: "contact",
    },
    footer: "footer",
    overlay: "overlay",
    imgModal: "imgModal",
};
export { LANGUAGE_ENUM, PAGE_NAME_ENUM, STORAGE_KEYS, FOLDERS, ICON_FULLNAMES, COMPONENT_NAMES };
