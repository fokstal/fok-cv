import { StorageKey, Folder, PageName } from "../const/const.js";

export default class Layout {
    root = null;
    basePageName = "home";
    languageWorker = null;
    pageList = [];
    #currentPage = this.basePageName;

    get currentPage() {
        return this.#currentPage;
    }
    set currentPage(pageName) {
        this.#currentPage = pageName;
        sessionStorage.setItem(StorageKey.session.currentPage, pageName);
    }

    constructor(root, basePageName, languageWorker) {
        if (root == null || basePageName == null || languageWorker == null)
            throw new Error("Init values is failed!");

        this.root = root;
        this.basePageName = basePageName;
        this.languageWorker = languageWorker;
        this.currentPage = sessionStorage.getItem(StorageKey.session.currentPage) || basePageName;
    }

    async init() {
        this.pageList = await Promise.all(Object.values(PageName).map(async (pageName) => {
            return { [`${pageName}`]: await Layout.getLayoutFromFile(`.${Folder.pages}${pageName}.html`) };
        })).then(results => Object.assign({}, ...results));

        const currentPage = this.currentPage;

        this.#setPage(currentPage);
        this.#transformLogo(currentPage);
        this.languageWorker.translateSite();
    }

    changePageByLink(pageNameToSelect) {
        const root = this.root;
        this.currentPage = pageNameToSelect;

        root.classList.add("fade-out");

        setTimeout(() => {
            this.#setPage(pageNameToSelect);

            root.classList.remove("fade-out");

            this.#showSelectedLink(pageNameToSelect);
            this.#transformLogo(pageNameToSelect);
            this.languageWorker.translateSite();
        }, 200);
    }

    #setPage() {
        const currentPage = this.currentPage;

        this.root.innerHTML = this.pageList[currentPage];
        document.title = "fok ∙ " + currentPage;
    }

    #showSelectedLink() {
        const currentPage = this.currentPage;

        document
            .querySelector(".links")
            .querySelectorAll("a")
            .forEach(aEl => {
                if (aEl.textContent === currentPage)
                    aEl.classList.add("selected");
                else
                    aEl.classList.remove("selected");
            });
    }

    #transformLogo() {
        const currentPage = this.currentPage;

        if (currentPage === PageName.home)
            document.querySelector(".logo").classList.add("home");
        else
            document.querySelector(".logo").classList.remove("home");
    }

    static async getLayoutFromFile(pathToFile) {
        const resp = await fetch(pathToFile)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network drop: " + response.statusText);
                }
                return response.text();
            })
            .then(layout => {
                return layout;
            })
            .catch(error => {
                console.error("Initial layout failed:", error);
            });

        return resp;
    }
}