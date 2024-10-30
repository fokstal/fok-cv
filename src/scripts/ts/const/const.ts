enum LANGUAGE_ENUM {
    BY = "BY",
    EN = "EN",
    RU = "RU",
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
        index: "/src/icons/",
        any: "/src/icons/any/"
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

const PAGE_NAMES = {
    home: "home",
    exp: "exp",
    about: "about",
    contact: "contact",
}

export { LANGUAGE_ENUM, STORAGE_KEYS, FOLDERS, ICON_FULLNAMES, PAGE_NAMES, COMPONENT_NAMES }