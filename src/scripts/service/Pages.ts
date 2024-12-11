import { STORAGE_KEYS, PAGE_NAME_ENUM } from "@scripts/const/const";
import ImageModal from "@scripts/service/components/ImageModal";
import ComponentFactory from "@scripts/service/ComponentFactory";
import Translator from "@scripts/service/components/Translator";
import { convertStringToPageNameEnum } from "@scripts/helpers/convertToEnum";
import { convertElement, getElementFromDocument } from "@scripts/helpers/elements";
import * as echarts from "echarts";
import ChartOptions from "@scripts/const/chartOptions/ChartOptions";
import ContactForm from "@scripts/service/components/ContactForm";

interface IPagesProps {
    componentFactory: ComponentFactory,
    translator: Translator,
    imageModal: ImageModal,
    basePageName: PAGE_NAME_ENUM,
}

class Pages {
    private _componentFactory: ComponentFactory;
    private _translator: Translator;
    private _imageModal: ImageModal;
    private _basePageName: PAGE_NAME_ENUM;
    private _burgerCheckbox: HTMLInputElement;
    private _currentPage: PAGE_NAME_ENUM;

    public get CurrentPage() {
        return this._currentPage;
    }
    private set CurrentPage(pageName) {
        this._currentPage = pageName;
        sessionStorage.setItem(STORAGE_KEYS.session.currentPage, pageName);
    }

    public constructor(props: IPagesProps, burgerCheckboxSelector: string = "#viewBurgerNavCheckbox") {
        this._componentFactory = props.componentFactory;
        this._translator = props.translator;
        this._imageModal = props.imageModal;
        this._basePageName = props.basePageName;
        this._currentPage = this._basePageName;

        this.CurrentPage = convertStringToPageNameEnum(
            sessionStorage.getItem(STORAGE_KEYS.session.currentPage) || props.basePageName);

        this._burgerCheckbox = getElementFromDocument<HTMLInputElement>(burgerCheckboxSelector);

        this.change(this.CurrentPage)

        this._burgerCheckbox.addEventListener("click", (el) => {
            const isViewBurger = convertElement<HTMLInputElement>(el.currentTarget).checked;

            if (isViewBurger) {
                this._componentFactory._rootElement.style.visibility = "hidden";
                this._componentFactory._rootElement.style.opacity = "0";
            }
            else {
                this._componentFactory._rootElement.style.visibility = "visible";
                this._componentFactory._rootElement.style.opacity = "1";
            }
        })
    }

    public change(pageNameToSelect: string) {
        const root = this._componentFactory._rootElement;

        this.CurrentPage = convertStringToPageNameEnum(pageNameToSelect);
        this._burgerCheckbox.checked = false;
        root.style.visibility = "visible";
        root.style.opacity = "1";

        this.set();

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

        this.showSelectedLink();
        this.transformLogo();
        this._translator.translateSite();
        this._imageModal.setEventToPhotosForShowImgModal();
    }

    private set() {
        const components = this._componentFactory._componentList;

        if (components) {
            const currentPage = this._currentPage;

            this._componentFactory._rootElement.innerHTML = components.pageList[currentPage].outerHTML;

            document.title = "fok ∙ " + currentPage;
        }
    }

    private showSelectedLink() {
        const currentPage = this._currentPage;

        this._componentFactory._containerElement
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

    private transformLogo() {
        const currentPage = this._currentPage;
        const logoLinkEl = convertElement<HTMLLinkElement>(this._componentFactory._containerElement.querySelector(".logo-link"));

        if (currentPage === PAGE_NAME_ENUM.home) {
            logoLinkEl.classList.add("logo-link--big");
        }
        else {
            logoLinkEl.classList.remove("logo-link--big");
        }
    }
}

export default Pages