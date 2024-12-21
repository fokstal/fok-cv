import App from "@scripts/service/App";
import "@styles/index.scss";
import { getElementFromDocument } from "./helpers/elements";

window.addEventListener("load", async () => {
    getElementFromDocument<HTMLElement>("#loader").style.display = "none";

    await App.startAsync();
});