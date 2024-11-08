enum LANGUAGE_ENUM {
    BY = "BY",
    EN = "EN",
    RU = "RU",
}

enum PAGE_NAME_ENUM {
    home = "home",
    exp = "exp",
    about = "about",
    contact = "contact",
}

const STORAGE_KEYS = {
    local: {
        currentLanguage: "currentLanguage",
    },
    session: {
        currentPage: "currentPage",
        isAccessMode: "isAccessMode",
    },
}

const FOLDERS = {
    src: "/src/",
    icons: {
        index: "/public/assets/icons/",
        any: "/public/assets/icons/any/"
    },
    components: {
        index: "/src/components/",
        pages: "/src/components/pages/",
    },
}

const ICON_FULLNAMES = {
    eye: "eye.svg",
    eyeClosed: "eye-closed.svg",
}

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
}

export { LANGUAGE_ENUM, PAGE_NAME_ENUM, STORAGE_KEYS, FOLDERS, ICON_FULLNAMES, COMPONENT_NAMES }