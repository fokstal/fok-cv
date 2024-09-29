const sendMessageToEmail = () => {
    document.querySelector("#pigeonImg").classList.toggle("rotate");

    document.querySelectorAll("input").forEach(inputBox => {
        inputBox.value = null;
    });
    document.querySelector("textarea").value = null;
}

export default sendMessageToEmail;