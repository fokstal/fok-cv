document.querySelector("header").style.display = "flex";
document.querySelector(".contact").style.display = "inline";

const LanguageEnum = Object.freeze({
    BY: 'BY',
    EN: 'EN',
    RU: 'RU',
});

let isAccessMode = false;
let currentLang = LanguageEnum.EN;

const headerEl = document.querySelector("header");
const mainHomeEl = document.querySelector(".home");
const mainElList = document.querySelectorAll("main");
const pigeonImgEl = document.querySelector("#pigeonImg");
const inputBoxList = document.querySelectorAll("input");
const textareaEl = document.querySelector("textarea");
const langSelect = document.querySelector("#langSelect");

langSelect.value = currentLang;

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


document
    .querySelector("#accessModeToggle")
    .addEventListener("click", () => {
        isAccessMode = !isAccessMode;

        const accessModeImg = document.querySelector("#accessModeImg");

        accessModeImg.classList.add('fade-out');

        accessModeImg.addEventListener('transitionend', function () {
            const iconName = isAccessMode ? "eye.svg" : "eye-closed.svg";

            accessModeImg.src = window.location.origin + "/icons/" + iconName;
            accessModeImg.classList.remove('fade-out');
        }, { once: true });
    });


langSelect.addEventListener("change", () => {
    const selectedLang = langSelect.options[langSelect.selectedIndex].text;

        if (LanguageEnum[selectedLang]) {
            currentLang = selectedLang;
            return;
        }
        
        throw new Error("No supported language in select.");
    });