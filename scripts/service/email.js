const sendMessageToEmail = () => {
    document.querySelector(".contact__write-message-block-image").classList.add("element-rotate");

    document.querySelectorAll(".contact__write-message-block-form-item-text-box").forEach(textBox => {
        textBox.value = null;
    });
    document.querySelector(".contact__write-message-block-form-item-text-box-area").value = null;

    setTimeout(() => {
        document.querySelector(".contact__write-message-block-image").classList.remove("element-rotate");
    }, 1000);
}

export default sendMessageToEmail;