import { getElementFromDocument, getElementListFromDocument } from "../../helpers/elements.js";

const sendMessageToEmail = () => {
    const writeMessageBlockImg: HTMLImageElement = getElementFromDocument<HTMLImageElement>(".contact__write-message-block-image");

    writeMessageBlockImg.classList.add("element-rotate");

    getElementListFromDocument<HTMLInputElement>(".contact__write-message-block-form-item-text-box")
        .forEach(textBox => {
            textBox.value = "";
        });

    getElementFromDocument<HTMLInputElement>(".contact__write-message-block-form-item-text-box-area").value = "";

    setTimeout(() => {
        writeMessageBlockImg.classList.remove("element-rotate");
    }, 1000);
}

export default sendMessageToEmail;