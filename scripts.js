document.querySelector(".contact").style.display = "inline";
document.querySelector("header").style.display = "flex";

const headerEl = document.querySelector("header");
const mainHomeEl = document.querySelector(".home");
const mainElList = document.querySelectorAll("main");

const pigeonImgEl = document.querySelector("#pigeonImg");
const inputBoxList = document.querySelectorAll("input");
const textareaEl = document.querySelector("textarea");


document
    .querySelectorAll(".links")
    .forEach(linksBoxEl => {
        linksBoxEl.querySelectorAll("a")
            .forEach(linkEl => {
                linkEl.addEventListener("click", () => {
                    headerEl.style.display = "flex";

                    let mainByLinkEl = null;

                    mainElList.forEach(mainEl => {
                        mainEl.style.display = "none";

                        if (mainEl.classList.contains(linkEl.textContent))
                            mainByLinkEl = mainEl;
                    })

                    if (mainByLinkEl)
                        mainByLinkEl.style.display = "inline";
                });
            });
    });

document
    .querySelector(".logo")
    .addEventListener("click", () => {
        headerEl.style.display = "none";

        mainElList.forEach(mainEl => {
            mainEl.style.display = "none";
        });

        mainHomeEl.style.display = "inline";
    });

const sendMessageToEmail = () => {
    pigeonImgEl.classList.toggle("rotate");

    inputBoxList.forEach(inputBox => {
        inputBox.value = null;
    });
    textareaEl.value = null;
}