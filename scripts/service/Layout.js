import { StorageKey, Folder, PageName } from "../const/const.js";
import { itLanguageConfig, libAndFwConfig, commitFreqConfig } from "../const/chartConfigs.js";
import ImgModal from "./ImgModal.js";

export default class Layout {
    root = null;
    basePageName = "home";
    languageWorker = null;
    imgModal = null;
    pageList = [];
    #currentPage = this.basePageName;
    burgerCheckbox = null;

    get currentPage() {
        return this.#currentPage;
    }
    set currentPage(pageName) {
        this.#currentPage = pageName;
        sessionStorage.setItem(StorageKey.session.currentPage, pageName);
    }

    constructor(root, basePageName, languageWorker) {
        this.root = root;
        this.basePageName = basePageName;
        this.languageWorker = languageWorker;
        this.imgModal = new ImgModal();
        this.currentPage = sessionStorage.getItem(StorageKey.session.currentPage) || basePageName;
        this.burgerCheckbox = document.querySelector("#isViewBurgerCheckbox");
    }

    async init() {
        this.pageList = await Promise.all(Object.values(PageName).map(async (pageName) => {
            return { [`${pageName}`]: await Layout.getLayoutFromFile(`.${Folder.pages}${pageName}.html`) };
        })).then(results => Object.assign({}, ...results));

        this.changePageByLink(this.currentPage)

        this.burgerCheckbox.addEventListener("click", (el) => {
            const isViewBurger = el.target.checked;

            if (isViewBurger) {
                this.root.style.visibility = "hidden";
                this.root.style.opacity = 0;
            }
            else {
                this.root.style.visibility = "visible";
                this.root.style.opacity = 1;
            }
        })
    }

    changePageByLink(pageNameToSelect) {
        const root = this.root;
        this.currentPage = pageNameToSelect;

        root.classList.add("fade-out");

        setTimeout(() => {
            root.classList.remove("fade-out");

            this.burgerCheckbox.checked = false;
            this.root.style.visibility = "visible";
            this.root.style.opacity = 1;

            this.#setPage(pageNameToSelect);

            if (pageNameToSelect == PageName.exp) {
                new Chart(document.getElementById("it-language-chart"), itLanguageConfig);
                new Chart(document.getElementById("lib-fw-chart"), libAndFwConfig);
                new Chart(document.getElementById("commit-freq-chart"), commitFreqConfig);
            }

            this.#showSelectedLink(pageNameToSelect);
            this.#transformLogo(pageNameToSelect);
            this.languageWorker.translateSite();
            this.imgModal.setOpenModalOnClick();
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
            .querySelectorAll("nav")
            .forEach(navEl => {
                navEl.querySelectorAll("a")
                    .forEach(aEl => {
                        if (aEl.textContent === currentPage)
                            aEl.classList.add("selected");
                        else
                            aEl.classList.remove("selected");
                    });
            })
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