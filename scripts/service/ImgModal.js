class ImgModal {
    imgModal = null;
    imgModalContent = null;
    overlay = null;

    constructor() {
        this.imgModal = document.querySelector(".image-modal");
        this.imgModalContent = this.imgModal.querySelector(".image-modal__content");
        this.overlay = document.querySelector("#overlay");
    }

    setOpenModalOnClick() {
        document
            .querySelectorAll("#photo")
            .forEach(img => {
                img.style.cursor = "pointer";

                img.addEventListener("click", (event) => {
                    this.#openViewImgModalByImg(event.target);
                })
            });
    }

    #openViewImgModalByImg(img) {
        this.imgModal.style.display = "flex";
        this.imgModalContent.src = img.src;
        this.overlay.style.display = "block";

        this.overlay.addEventListener("click", () => {
            this.#closeViewImgModal();
        });
    }

    #closeViewImgModal() {
        this.imgModal.style.display = "none";
        this.imgModalContent.src = "";
        this.overlay.style.display = "none";
    }
}

export default ImgModal;