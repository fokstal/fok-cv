import { getElementFromDocument } from "@scripts/helpers/elements";

interface IShowNotificationProps {
    message: string,
    color?: string,
    ms?: number,
}

const showNotification = ({ message, color = "#434343", ms = 3000 }: IShowNotificationProps) => {
    const notificationBlock = getElementFromDocument<HTMLElement>("#notificationBlock");
    const content = notificationBlock.querySelector("#notificationBlockContent") as HTMLElement;

    content.textContent = message;
    content.style.color = color;

    notificationBlock.style.visibility = "visible";
    notificationBlock.style.fontSize = "min(24px, 5vw)";

    setTimeout(() => {
        notificationBlock.style.visibility = "hidden";
        notificationBlock.style.fontSize = "0px";
    }, ms);
}

export default showNotification;
export { IShowNotificationProps }