import { STORAGE_KEYS, PAGE_NAME_ENUM } from "@scripts/const/const";
import ImageModal from "@scripts/service/components/ImageModal";
import ComponentFactory from "@scripts/service/ComponentFactory";
import Translator from "@scripts/service/components/Translator";
import { convertStringToPageNameEnum } from "@scripts/helpers/convertToEnum";
import { convertElement, getElementFromDocument } from "@scripts/helpers/elements";
import * as echarts from "echarts";
import ChartOptions from "@scripts/const/chartOptions/ChartOptions";
import ContactForm from "@scripts/service/components/ContactForm";

interface PageChangerProps {
    componentFactory: ComponentFactory,
    translator: Translator,
    imageModalViewer: ImageModal,
    basePageName: PAGE_NAME_ENUM,
}

class PageChanger {
    componentFactory: ComponentFactory;
    translator: Translator;
    imageModalViewer: ImageModal;
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
                this.componentFactory._rootElement.style.visibility = "hidden";
                this.componentFactory._rootElement.style.opacity = "0";
            }
            else {
                this.componentFactory._rootElement.style.visibility = "visible";
                this.componentFactory._rootElement.style.opacity = "1";
            }
        })
    }

    changePageByLink(pageNameToSelect: string) {
        const root = this.componentFactory._rootElement;

        this.currentPage = convertStringToPageNameEnum(pageNameToSelect);
        this.burgerCheckbox.checked = false;
        root.style.visibility = "visible";
        root.style.opacity = "1";

        this.setPageByCurrentPage();

        if (pageNameToSelect == PAGE_NAME_ENUM.exp) {
            const itLanguageChart = echarts.init((getElementFromDocument<HTMLCanvasElement>("#it-language-chart")));
            const itLanguageFreqChart = echarts.init((getElementFromDocument<HTMLCanvasElement>("#it-language-freq-chart")));
            const libFwChart = echarts.init((getElementFromDocument<HTMLCanvasElement>("#lib-fw-chart")));
            const commitFreqChart = echarts.init((getElementFromDocument<HTMLCanvasElement>("#commit-freq-chart")));

            itLanguageChart.setOption(ChartOptions.itLanguage);
            itLanguageFreqChart.setOption(ChartOptions.itLanguageFreq);
            libFwChart.setOption(ChartOptions.libraryAndFramework);
            commitFreqChart.setOption(ChartOptions.commitFrequency);

            document.addEventListener("resize", () => {
                itLanguageChart.resize();
                itLanguageFreqChart.resize();
                libFwChart.resize();
                commitFreqChart.resize();
            });
        }

        if (pageNameToSelect == PAGE_NAME_ENUM.contact) {
            const contactForm = new ContactForm();

            window.sendContactToAdminEmail = contactForm.submit;
        }

        this.showSelectedLinkByCurrentPage();
        this.transformLogoByCurrentPage();
        this.translator.translateSite();
        this.imageModalViewer.setEventToPhotosForShowImgModal();
    }

    private setPageByCurrentPage() {
        const components = this.componentFactory._componentList;

        if (components) {
            const currentPage = this._currentPage;

            this.componentFactory._rootElement.innerHTML = components.pageList[currentPage].outerHTML;

            document.title = "fok ∙ " + currentPage;
        }
    }

    private showSelectedLinkByCurrentPage() {
        const currentPage = this._currentPage;

        this.componentFactory._containerElement
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
        const logoLinkEl = convertElement<HTMLLinkElement>(this.componentFactory._containerElement.querySelector(".logo-link"));

        if (currentPage === PAGE_NAME_ENUM.home) {
            logoLinkEl.classList.add("logo-link--big");
        }
        else {
            logoLinkEl.classList.remove("logo-link--big");
        }
    }
}

export default PageChanger