import { convertElement } from "@scripts/helpers/elements";
import Layout from "@scripts/service/Layout";

type ImageModalElementListType = {
    imageModal: HTMLDivElement,
    imageModalContent: HTMLImageElement,
    overlay: HTMLDivElement,
}

type ImageModalSelectorForElementListType = {
    imageModal: string,
    imageModalContent: string,
    overlay: string,
}

const default_imageModalSelectorForElementList: ImageModalSelectorForElementListType = {
    imageModal: "#imageModal",
    imageModalContent: "#imageModalContent",
    overlay: "#overlay",
}

class ImageModal {
    private _elementList: ImageModalElementListType;

    public constructor(selectorForElementList: ImageModalSelectorForElementListType = default_imageModalSelectorForElementList) {
        this._elementList = Layout.getElementsBySelectorList
            <ImageModalElementListType, ImageModalSelectorForElementListType>(selectorForElementList);
    }

    public show(image: HTMLImageElement) {
        this._elementList.imageModal.style.display = "flex";
        this._elementList.imageModalContent.src = image.src;
        this._elementList.overlay.style.display = "block";

        this._elementList.overlay.addEventListener("click", () => {
            this.close();
        });
    }

    public close() {
        this._elementList.imageModal.style.display = "none";
        this._elementList.imageModalContent.src = "";
        this._elementList.overlay.style.display = "none";
    }

    public setEventToPhotosForShowImgModal() {
        document
            .querySelectorAll("#photo")
            .forEach(el => {
                const image: HTMLImageElement = convertElement<HTMLImageElement>(el);

                image.style.cursor = "pointer";

                image.addEventListener("click", (event) => {
                    this.show
                        (convertElement<HTMLImageElement>(event.currentTarget));
                })
            });
    }
}

export default ImageModal;