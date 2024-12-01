import { getElementFromDocument } from "@scripts/helpers/elements";
import EmailJSBodyType from "@scripts/models/EmailJSBodyType";

interface IContactFormProps {
    nameBoxSelector: string,
    emailBoxSelector: string,
    messageBoxSelector: string,
    writeMessageBlockImgSelector: string
}

class ContactForm {
    private _nameBox: HTMLInputElement;
    private _nameErrorBox: HTMLSpanElement;
    private _emailBox: HTMLInputElement;
    private _emailErrorBox: HTMLSpanElement;
    private _messageBox: HTMLInputElement;
    private _messageErrorBox: HTMLSpanElement;
    private _writeMessageBlockImg: HTMLImageElement;

    constructor(props: IContactFormProps) {
        this._nameBox = getElementFromDocument<HTMLInputElement>(props.nameBoxSelector);
        this._nameErrorBox = getElementFromDocument<HTMLSpanElement>("#contactFormNameErrorBox")
        this._emailBox = getElementFromDocument<HTMLInputElement>(props.emailBoxSelector);
        this._emailErrorBox = getElementFromDocument<HTMLSpanElement>("#contactFormEmailErrorBox")
        this._messageBox = getElementFromDocument<HTMLInputElement>(props.messageBoxSelector);
        this._messageErrorBox = getElementFromDocument<HTMLSpanElement>("#contactFormMessageErrorBox")
        this._writeMessageBlockImg = getElementFromDocument<HTMLImageElement>(props.writeMessageBlockImgSelector);

        this._nameBox.addEventListener("input", () => {
            this.validateNameField();
        });

        this._emailBox.addEventListener("input", () => {
            this.validateEmailField();
        });

        this._messageBox.addEventListener("input", () => {
            this.validateMessageField();
        })
    }

    private getEmailJSBody(): EmailJSBodyType {
        return {
            service_id: "service_3qx8cr6",
            template_id: "template_cof2k3b",
            user_id: "2jsGiS-j9bxmIA4gY",
            template_params: {
                name: this._nameBox.value.trim(),
                email: this._emailBox.value.trim(),
                message: this._messageBox.value.trim(),
            },
        }
    }

    private setEmailSendedState() {
        this._writeMessageBlockImg.classList.add("element-rotate");

        this._nameBox.value = "";
        this._emailBox.value = "";
        this._messageBox.value = "";

        setTimeout(() => {
            this._writeMessageBlockImg.classList.remove("element-rotate");
        }, 1000);
    }

    private validateNameField(): boolean {
        const nameValue = this._nameBox.value.trim();
        let isNameFieldValid = true;

        if (nameValue.length < 2 || nameValue.length > 20) {
            isNameFieldValid = false;
            this._nameErrorBox.style.opacity = "1";
            this._nameErrorBox.innerHTML = "Name length should be <strong>from 2 to 20</strong> characters";
        }

        if (isNameFieldValid)
            this._nameErrorBox.style.opacity = "0";

        return isNameFieldValid;
    }

    private validateEmailField(): boolean {
        const emailValue = this._emailBox.value.trim();
        let isEmailFieldValid = true;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!emailPattern.test(emailValue)) {
            isEmailFieldValid = false;
            this._emailErrorBox.style.opacity = "1";
            this._emailErrorBox.innerHTML = "Enter email in format '<strong>email@example.domen</strong>'";
        }

        if (isEmailFieldValid)
            this._emailErrorBox.style.opacity = "0";

        return isEmailFieldValid;
    }

    private validateMessageField(): boolean {
        const messageValue = this._messageBox.value.trim();
        let isMessageFieldValid = true;

        if (messageValue.length < 25) {
            isMessageFieldValid = false;
            this._messageErrorBox.style.opacity = "1";
            this._messageErrorBox.innerHTML = "Message length must be more <strong>than 30</strong> characters";
        }

        if (isMessageFieldValid)
            this._messageErrorBox.style.opacity = "0";

        return isMessageFieldValid;
    }

    public sendEmail = async () => {
        const emailJSBody = this.getEmailJSBody();
        const isNameFieldValid = this.validateNameField();
        const isEmailFieldValid = this.validateEmailField();
        const isMessageFieldValid = this.validateMessageField();

        const isFormValid = isNameFieldValid && isEmailFieldValid && isMessageFieldValid;

        if (!isFormValid)
            return;

        try {
            const emailjsResp = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
                method: "POST",
                body: JSON.stringify(emailJSBody),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (emailjsResp.ok) {
                this.setEmailSendedState();
            }
        }
        catch (err) {
            console.error(`EmailJS err: ${err}`);
        }
    }
}

export default ContactForm;
export { IContactFormProps };