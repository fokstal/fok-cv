import { getElementFromDocument, convertElement } from "../helpers/elements.js";

class ImageModalViewer {
    imageModal: HTMLDivElement;
    imageModalContent: HTMLImageElement;
    overlay: HTMLDivElement;

    constructor(
        imageModalElSelector: string,
        imageModalContentElSelector: string,
        overlayElSelector: string
    ) {
        this.imageModal = getElementFromDocument<HTMLDivElement>(imageModalElSelector);
        this.imageModalContent = getElementFromDocument<HTMLImageElement>(imageModalContentElSelector);
        this.overlay = getElementFromDocument<HTMLDivElement>(overlayElSelector);
    }

    setImageModalEvents() {
        document
            .querySelectorAll("#photo")
            .forEach(el => {
                const image: HTMLImageElement = convertElement<HTMLImageElement>(el);

                image.style.cursor = "pointer";

                image.addEventListener("click", (event) => {
                    this.openImageModalByImage
                        (convertElement<HTMLImageElement>(event.currentTarget));
                })
            });
    }

    private openImageModalByImage(image: HTMLImageElement) {
        this.imageModal.style.display = "flex";
        this.imageModalContent.src = image.src;
        this.overlay.style.display = "block";

        this.overlay.addEventListener("click", () => {
            this.closeImageModal();
        });
    }

    private closeImageModal() {
        this.imageModal.style.display = "none";
        this.imageModalContent.src = "";
        this.overlay.style.display = "none";
    }
}

export default ImageModalViewer;