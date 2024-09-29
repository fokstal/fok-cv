import Layout from "./scripts/service/Layout.js";
import sendMessageToEmail from "./scripts/service/email.js";
import LanguageWorker from "./scripts/service/LanguageWorker.js";
import AccessModeWorker from "./scripts/service/AccessModeWorker.js";
import { LanguageEnum } from "./scripts/const/const.js";

const root = document.querySelector(".root");

const languageWorker = new LanguageWorker(document.querySelector("#languageSelect"), LanguageEnum.EN)
const accessModeWorker = new AccessModeWorker(document.querySelector("#accessModeImg"));

const layout = new Layout(root, "home", languageWorker);
await layout.init();

window.changePageByLink = layout.changePageByLink.bind(layout);
window.sendMessageToEmail = sendMessageToEmail;
window.toggleAccessMode = accessModeWorker.toggleAccessMode;
window.changeLanguage = languageWorker.changeLanguage;