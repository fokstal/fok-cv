import { getElementFromDocument } from "@scripts/helpers/elements";

const showNotification = (message: string, color: string = "#434343") => {
    const notificationBlock = getElementFromDocument<HTMLElement>("#notificationBlock");
    const content = notificationBlock.querySelector("#notificationBlockContent") as HTMLElement;

    content.textContent = message;
    content.style.color = color;

    notificationBlock.style.visibility = "visible";
    notificationBlock.style.fontSize = "32px";

    setTimeout(() => {
        notificationBlock.style.visibility = "hidden";
        notificationBlock.style.fontSize = "0px";
    }, 3000);
}

export default showNotification;