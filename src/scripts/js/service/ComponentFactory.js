import { FOLDERS, COMPONENT_NAMES } from "../const/const.js";
import { getElementFromDocument } from "../helpers/elements.js";
class ComponentFactory {
    container;
    root = document.createElement("div");
    components;
    constructor(containerElSelector) {
        this.container = getElementFromDocument(containerElSelector);
    }
    async initAsync() {
        this.components = {
            header: ComponentFactory.getComponentFromLayout(await ComponentFactory.getLayoutFromFileAsync(`${FOLDERS.components.index}${COMPONENT_NAMES.header}.html`)),
            pageList: await Promise.all(Object.values(COMPONENT_NAMES.pages).map(async (pageName) => {
                return {
                    [`${pageName}`]: ComponentFactory.getComponentFromLayout(await ComponentFactory.getLayoutFromFileAsync(`${FOLDERS.components.pages}${pageName}.html`))
                };
            })).then(results => Object.assign({}, ...results)),
            footer: ComponentFactory.getComponentFromLayout(await ComponentFactory.getLayoutFromFileAsync(`${FOLDERS.components.index}${COMPONENT_NAMES.footer}.html`)),
            overlay: ComponentFactory.getComponentFromLayout(await ComponentFactory.getLayoutFromFileAsync(`${FOLDERS.components.index}${COMPONENT_NAMES.overlay}.html`)),
            imgModal: ComponentFactory.getComponentFromLayout(await ComponentFactory.getLayoutFromFileAsync(`${FOLDERS.components.index}${COMPONENT_NAMES.imgModal}.html`)),
        };
        this.root.classList.add("root");
        this.setComponentsToContainer(this.components.header, this.root, this.components.footer, this.components.overlay, this.components.imgModal);
    }
    static async getLayoutFromFileAsync(pathToFile) {
        try {
            const resp = await fetch(pathToFile);
            if (!resp.ok) {
                throw new Error("Network drop: " + resp.statusText);
            }
            const layout = await resp.text();
            return layout;
        }
        catch (err) {
            console.error("Initial layout failed: ", err);
            throw err;
        }
    }
    static getComponentFromLayout(layout) {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = layout;
        return tempDiv.firstElementChild;
    }
    setComponentsToContainer(...components) {
        components.forEach(component => {
            this.container.appendChild(component);
        });
    }
}
export default ComponentFactory;
