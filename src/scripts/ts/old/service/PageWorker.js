import { StorageKey, PageName } from "../../const/const.js";
import { itLanguageConfig, libAndFwConfig, commitFreqConfig } from "../../const/chartConfigs.js";
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
        this.burgerCheckbox = document.querySelector("#viewBurgerNavCheckbox");
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
    }

    #setPage() {
        const currentPage = this.currentPage;

        this.indexLayout.root.innerHTML = this.indexLayout.components.pageList[currentPage].outerHTML;

        document.title = "fok ∙ " + currentPage;
    }

    #showSelectedLink() {
        const currentPage = this.currentPage;

        this.indexLayout.container
            .querySelectorAll(".header__nav")
            .forEach(navEl => {
                navEl.querySelectorAll(".header__nav-link")
                    .forEach(linkEl => {
                        if (linkEl.id.includes(currentPage))
                            linkEl.classList.add("header__nav-link--selected");
                        else
                            linkEl.classList.remove("header__nav-link--selected");
                    });
            });
    }

    #transformLogo() {
        const currentPage = this.currentPage;
        const logoLinkEl = this.indexLayout.container.querySelector(".logo-link");

        if (currentPage === PageName.home) {
            logoLinkEl.classList.add("logo-link--big");
        }
        else {
            logoLinkEl.classList.remove("logo-link--big");
        }
    }
}

export default PageWorker