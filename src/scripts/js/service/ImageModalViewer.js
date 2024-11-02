import { getElementFromDocument, convertElement } from "../helpers/elements";
class ImageModalViewer {
    imageModal;
    imageModalContent;
    overlay;
    constructor(imageModalElSelector, imageModalContentElSelector, overlayElSelector) {
        this.imageModal = getElementFromDocument(imageModalElSelector);
        this.imageModalContent = getElementFromDocument(imageModalContentElSelector);
        this.overlay = getElementFromDocument(overlayElSelector);
    }
    setImageModalEvents() {
        document
            .querySelectorAll("#photo")
            .forEach(el => {
            const image = convertElement(el);
            image.style.cursor = "pointer";
            image.addEventListener("click", (event) => {
                this.openImageModalByImage(convertElement(event.currentTarget));
            });
        });
    }
    openImageModalByImage(image) {
        this.imageModal.style.display = "flex";
        this.imageModalContent.src = image.src;
        this.overlay.style.display = "block";
        this.overlay.addEventListener("click", () => {
            this.closeImageModal();
        });
    }
    closeImageModal() {
        this.imageModal.style.display = "none";
        this.imageModalContent.src = "";
        this.overlay.style.display = "none";
    }
}
export default ImageModalViewer;
