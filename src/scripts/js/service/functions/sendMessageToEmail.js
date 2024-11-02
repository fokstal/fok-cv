import { getElementFromDocument, getElementListFromDocument } from "../../helpers/elements";
const sendMessageToEmail = () => {
    const writeMessageBlockImg = getElementFromDocument(".contact__write-message-block-image");
    writeMessageBlockImg.classList.add("element-rotate");
    getElementListFromDocument(".contact__write-message-block-form-item-text-box")
        .forEach(textBox => {
        textBox.value = "";
    });
    getElementFromDocument(".contact__write-message-block-form-item-text-box-area").value = "";
    setTimeout(() => {
        writeMessageBlockImg.classList.remove("element-rotate");
    }, 1000);
};
export default sendMessageToEmail;
