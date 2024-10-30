import { PAGE_NAME_ENUM } from "../const/const"

type PageListModel = {
    [key in PAGE_NAME_ENUM]: HTMLElement;
}

type ComponentsModel = {
    header: HTMLElement,
    pageList: PageListModel,
    footer: HTMLElement,
    overlay: HTMLElement,
    imgModal: HTMLElement,
};

export { ComponentsModel }