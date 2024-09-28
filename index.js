import Layout from "./scripts/Layout.js";
import sendMessageToEmail from "./scripts/email.js";
import LanguageWorker from "./scripts/LanguageWorker.js";
import AccessModeWorker from "./scripts/AccessModeWorker.js";

const root = document.querySelector(".root");
const layout = new Layout(root, "home");
await layout.init();
const languageWorker = new LanguageWorker(document.querySelector("#languageSelect"))
const accessModeWorker = new AccessModeWorker(document.querySelector("#accessModeImg"));

window.changePageByLink = layout.changePageByLink.bind(layout);
window.sendMessageToEmail = sendMessageToEmail;
window.toggleAccessMode = accessModeWorker.toggleAccessMode;
window.changeLanguage = languageWorker.changeLanguage;