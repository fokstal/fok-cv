import { StorageKey, Folder, PageName, ComponentsName } from "../const/const.js";
import { itLanguageConfig, libAndFwConfig, commitFreqConfig } from "../const/chartConfigs.js";
import ImgModal from "./ImgModal.js";

class PageWorker {
    indexLayout = null;
    basePageName = "home";
    languageWorker = null;
    imgModal = null;
    #currentPage = this.basePageName;
    burgerCheckbox = null;

    get currentPage() {
        return this.#currentPage;
    }
    set currentPage(pageName) {
        this.#currentPage = pageName;
        sessionStorage.setItem(StorageKey.session.currentPage, pageName);
    }

    constructor(indexLayout, basePageName, languageWorker) {
        this.indexLayout = indexLayout;
        this.basePageName = basePageName;
        this.languageWorker = languageWorker;
        this.imgModal = new ImgModal();
        this.currentPage = sessionStorage.getItem(StorageKey.session.currentPage) || basePageName;
        this.burgerCheckbox = document.querySelector("#isViewBurgerCheckbox");
    }

    init() {
        this.changePageByLink(this.currentPage)

        this.burgerCheckbox.addEventListener("click", (el) => {
            const isViewBurger = el.target.checked;

            if (isViewBurger) {
                this.indexLayout.root.style.visibility = "hidden";
                this.indexLayout.root.style.opacity = 0;
            }
            else {
                this.indexLayout.root.style.visibility = "visible";
                this.indexLayout.root.style.opacity = 1;
            }
        })
    }

    changePageByLink(pageNameToSelect) {
        const root = this.indexLayout.root;

        this.currentPage = pageNameToSelect;

        root.classList.add("fade-out");

        setTimeout(() => {
            root.classList.remove("fade-out");

            this.burgerCheckbox.checked = false;
            root.style.visibility = "visible";
            root.style.opacity = 1;

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

        this.indexLayout.root.innerHTML = this.indexLayout.components.pageList[currentPage].outerHTML;

        document.title = "fok ∙ " + currentPage;
    }

    #showSelectedLink() {
        const currentPage = this.currentPage;

        this.indexLayout.container
            .querySelectorAll("nav")
            .forEach(navEl => {
                navEl.querySelectorAll("a")
                    .forEach(aEl => {
                        if (aEl.id.includes(currentPage))
                            aEl.classList.add("selected");
                        else
                            aEl.classList.remove("selected");
                    });
            })
    }

    #transformLogo() {
        const currentPage = this.currentPage;

        if (currentPage === PageName.home)
            this.indexLayout.container.querySelector(".logo").classList.add("home");
        else
            this.indexLayout.container.querySelector(".logo").classList.remove("home");
    }
}

export default PageWorker