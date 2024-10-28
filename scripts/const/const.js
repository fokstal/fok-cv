const LanguageEnum = Object.freeze({
    BY: 'BY',
    EN: 'EN',
    RU: 'RU',
});

const StorageKey = {
    local: {
        currentLanguage: "currentLanguage",
    },
    session: {
        currentPage: "currentPage",
        isAccessMode: "isAccessMode",
    },
}

const Folder = {
    icons: "/icons/",
    any: "/any/",
    components: "/components/",
    pages: "/components/pages/",
}

const IconFullName = {
    eye: "eye.svg",
    eyeClosed: "eye-closed.svg",
}

const ComponentsName = {
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

const PageName = {
    home: "home",
    exp: "exp",
    about: "about",
    contact: "contact",
}

export { LanguageEnum, StorageKey, Folder, IconFullName, PageName, ComponentsName }