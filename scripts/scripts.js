import Layout from "./Layout.js";
import sendMessageToEmail from "./email.js";
import LanguageWorker from "./LanguageWorker.js";
import AccessModeWorker from "./AccessModeWorker.js";

const container = document.querySelector(".container");
const layout = new Layout(container, "home");
await layout.init();
const languageWorker = new LanguageWorker(document.querySelector("#languageSelect"))
const accessModeWorker = new AccessModeWorker(document.querySelector("#accessModeImg"));

window.changePageByLink = layout.changePageByLink.bind(layout);
window.sendMessageToEmail = sendMessageToEmail;
window.toggleAccessMode = accessModeWorker.toggleAccessMode;
window.changeLanguage = languageWorker.changeLanguage;