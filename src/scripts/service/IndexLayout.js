import { Folder, ComponentsName } from "../const/const.js";

class IndexLayout {
    container = null;
    root = null;
    components = {
        header: "",
        pageList: [],
        footer: "",
        overlay: "",
        imgModal: "",
    };

    constructor(container) {
        this.container = container;
    }

    async initAsync() {
        this.components = {
            header: IndexLayout.getComponentFromLayout(await IndexLayout.getLayoutFromFile(`${Folder.src}${Folder.components}${ComponentsName.header}.html`)),
            pageList: await Promise.all(Object.values(ComponentsName.pages).map(async (pageName) => {
                return { [`${pageName}`]: IndexLayout.getComponentFromLayout(await IndexLayout.getLayoutFromFile(`${Folder.src}${Folder.pages}${pageName}.html`)) };
            })).then(results => Object.assign({}, ...results)),

            footer: IndexLayout.getComponentFromLayout(await IndexLayout.getLayoutFromFile(`${Folder.src}${Folder.components}${ComponentsName.footer}.html`)),
            overlay: IndexLayout.getComponentFromLayout(await IndexLayout.getLayoutFromFile(`${Folder.src}${Folder.components}${ComponentsName.overlay}.html`)),
            imgModal: IndexLayout.getComponentFromLayout(await IndexLayout.getLayoutFromFile(`${Folder.src}${Folder.components}${ComponentsName.imgModal}.html`)),
        }

        this.root = document.createElement("div");
        this.root.classList.add("root");

        this.#setComponentsToContainer(
            this.components.header,
            this.root,
            this.components.footer,
            this.components.overlay,
            this.components.imgModal
        );
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
                console.error("Initial layout failed: ", error);
            });

        return resp;
    }

    static getComponentFromLayout(layout) {
        const tempDiv = document.createElement("div");

        tempDiv.innerHTML = layout;

        return tempDiv.firstChild;
    }

    #setComponentsToContainer(...components) {
        components.forEach(component => {
            this.container.appendChild(component);
        });
    }
}

export default IndexLayout