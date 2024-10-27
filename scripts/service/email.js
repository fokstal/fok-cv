const sendMessageToEmail = () => {
    document.querySelector(".contact__write-message-block-image").classList.toggle("rotate");

    document.querySelectorAll(".contact__write-message-block-form-item-text-box").forEach(textBox => {
        textBox.value = null;
    });
    document.querySelector(".contact__write-message-block-form-item-text-box-area").value = null;
}

export default sendMessageToEmail;