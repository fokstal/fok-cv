import { FOLDERS, COMPONENT_NAMES } from "@scripts/const/const";
import { getElementFromDocument } from "@scripts/helpers/elements";
import { ComponentsModel } from "@scripts/models/models";

class ComponentFactory {
    public _containerElement: HTMLDivElement;
    public _rootElement: HTMLDivElement = document.createElement("div");
    public _componentList?: ComponentsModel;

    public constructor(selectorForContainerElement: string = ".container") {
        this._containerElement = getElementFromDocument<HTMLDivElement>(selectorForContainerElement);
    }

    public async initAsync() {
        this._componentList = {
            header: ComponentFactory.getComponentFromLayout
                (await ComponentFactory.getLayoutFromFileAsync(`${FOLDERS.components.index}${COMPONENT_NAMES.header}.html`)),
            pageList: await Promise.all(Object.values(COMPONENT_NAMES.pages).map(async (pageName) => {
                return {
                    [`${pageName}`]: ComponentFactory.getComponentFromLayout
                        (await ComponentFactory.getLayoutFromFileAsync(`${FOLDERS.components.pages}${pageName}.html`))
                };
            })).then(results => Object.assign({}, ...results)),

            footer: ComponentFactory.getComponentFromLayout
                (await ComponentFactory.getLayoutFromFileAsync(`${FOLDERS.components.index}${COMPONENT_NAMES.footer}.html`)),
            overlay: ComponentFactory.getComponentFromLayout
                (await ComponentFactory.getLayoutFromFileAsync(`${FOLDERS.components.index}${COMPONENT_NAMES.overlay}.html`)),
            imgModal: ComponentFactory.getComponentFromLayout
                (await ComponentFactory.getLayoutFromFileAsync(`${FOLDERS.components.index}${COMPONENT_NAMES.imgModal}.html`)),
        }

        this._rootElement.classList.add("root");

        this.setComponentsToContainer(
            this._componentList.header,
            this._rootElement,
            this._componentList.footer,
            this._componentList.overlay,
            this._componentList.imgModal
        );
    }

    public static async getLayoutFromFileAsync(pathToFile: string): Promise<string> {
        try {
            const resp = await fetch(window.location.href + pathToFile)

            if (!resp.ok) {
                throw new Error("Network drop: " + resp.statusText);
            }

            const layout: string = await resp.text();

            return layout
        }
        catch (err) {
            console.error("Initial layout failed: ", err);

            throw err;
        }
    }

    public static getComponentFromLayout(layout: string): HTMLElement {
        const tempDiv: HTMLDivElement = document.createElement("div");

        tempDiv.innerHTML = layout;

        return tempDiv.firstElementChild as HTMLElement;
    }

    private setComponentsToContainer(...components: HTMLElement[]) {
        components.forEach(component => {
            this._containerElement.appendChild(component);
        });
    }
}

export default ComponentFactory