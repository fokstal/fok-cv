import { STORAGE_KEYS, PAGE_NAME_ENUM } from "../const/const";
import ImageModalViewer from "./ImageModalViewer";
import ComponentFactory from "./ComponentFactory";
import Translator from "./Translator";
import { convertStringToPageNameEnum } from "../helpers/convertToEnum";
import { convertElement, getElementFromDocument } from "../helpers/elements";
import { Chart } from "chart.js";
import ChartConfigs from "../const/chartConfigs/ChartOptions";

interface PageChangerProps {
    componentFactory: ComponentFactory,
    translator: Translator,
    imageModalViewer: ImageModalViewer,
    basePageName: PAGE_NAME_ENUM,
}

class PageChanger {
    componentFactory: ComponentFactory;
    translator: Translator;
    imageModalViewer: ImageModalViewer;
    basePageName: PAGE_NAME_ENUM;
    burgerCheckbox: HTMLInputElement;

    private _currentPage: PAGE_NAME_ENUM;

    get currentPage() {
        return this._currentPage;
    }
    set currentPage(pageName) {
        this._currentPage = pageName;
        sessionStorage.setItem(STORAGE_KEYS.session.currentPage, pageName);
    }

    constructor(props: PageChangerProps) {
        this.componentFactory = props.componentFactory;
        this.translator = props.translator;
        this.imageModalViewer = props.imageModalViewer;
        this.basePageName = props.basePageName;
        this._currentPage = this.basePageName;

        this.currentPage = convertStringToPageNameEnum(
            sessionStorage.getItem(STORAGE_KEYS.session.currentPage) || props.basePageName);

        this.burgerCheckbox = getElementFromDocument<HTMLInputElement>("#viewBurgerNavCheckbox");

        this.changePageByLink(this.currentPage)

        this.burgerCheckbox.addEventListener("click", (el) => {
            const isViewBurger = convertElement<HTMLInputElement>(el.currentTarget).checked;

            if (isViewBurger) {
                this.componentFactory.root.style.visibility = "hidden";
                this.componentFactory.root.style.opacity = "0";
            }
            else {
                this.componentFactory.root.style.visibility = "visible";
                this.componentFactory.root.style.opacity = "1";
            }
        })
    }

    changePageByLink(pageNameToSelect: string) {
        const root = this.componentFactory.root;

        this.currentPage = convertStringToPageNameEnum(pageNameToSelect);
        this.burgerCheckbox.checked = false;
        root.style.visibility = "visible";
        root.style.opacity = "1";

        this.setPageByCurrentPage();

        if (pageNameToSelect == PAGE_NAME_ENUM.exp) {
            new Chart(getElementFromDocument<HTMLCanvasElement>("#it-language-chart"), ChartConfigs.itLanguage);
            new Chart(getElementFromDocument<HTMLCanvasElement>("lib-fw-chart"), ChartConfigs.libraryAndFramework);
            new Chart(getElementFromDocument<HTMLCanvasElement>("commit-freq-chart"), ChartConfigs.commitFrequency);
        }

        this.showSelectedLinkByCurrentPage();
        this.transformLogoByCurrentPage();
        this.translator.translateSiteByCurrentLanguage();
        this.imageModalViewer.setImageModalEvents();
    }

    private setPageByCurrentPage() {
        const components = this.componentFactory.components;

        if (components) {
            const currentPage = this._currentPage;

            this.componentFactory.root.innerHTML = components.pageList[currentPage].outerHTML;

            document.title = "fok ∙ " + currentPage;
        }
    }

    private showSelectedLinkByCurrentPage() {
        const currentPage = this._currentPage;

        this.componentFactory.container
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

    private transformLogoByCurrentPage() {
        const currentPage = this._currentPage;
        const logoLinkEl = convertElement<HTMLLinkElement>(this.componentFactory.container.querySelector(".logo-link"));

        if (currentPage === PAGE_NAME_ENUM.home) {
            logoLinkEl.classList.add("logo-link--big");
        }
        else {
            logoLinkEl.classList.remove("logo-link--big");
        }
    }
}

export default PageChanger