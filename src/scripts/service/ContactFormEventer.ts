import translation from "@scripts/const/translation";
import { getElementFromDocument } from "@scripts/helpers/elements";
import EmailJSBodyType from "@scripts/models/EmailJSBodyType";
import Translator from "@scripts/service/Translator";
import showNotification from "./functions/showNotification";

class ContactFormEventer {
    private _contactForm: HTMLFormElement;
    private _nameBox: HTMLInputElement;
    private _nameErrorBox: HTMLSpanElement;
    private _emailBox: HTMLInputElement;
    private _emailErrorBox: HTMLSpanElement;
    private _messageBox: HTMLInputElement;
    private _messageErrorBox: HTMLSpanElement;
    private _writeMessageBlockImg: HTMLImageElement;

    constructor() {
        this._contactForm = getElementFromDocument<HTMLFormElement>(".contact__write-message-block-form")
        this._nameBox = getElementFromDocument<HTMLInputElement>("#contactFormNameBox");
        this._nameErrorBox = getElementFromDocument<HTMLSpanElement>("#contactFormNameErrorBox")
        this._emailBox = getElementFromDocument<HTMLInputElement>("#contactFormEmailBox");
        this._emailErrorBox = getElementFromDocument<HTMLSpanElement>("#contactFormEmailErrorBox")
        this._messageBox = getElementFromDocument<HTMLInputElement>("#contactFormMessageBox");
        this._messageErrorBox = getElementFromDocument<HTMLSpanElement>("#contactFormMessageErrorBox")
        this._writeMessageBlockImg = getElementFromDocument<HTMLImageElement>(".contact__write-message-block-image");

        this._contactForm.addEventListener("focusout", () => {
            this.hideAllErrorBox();
        });
        this._contactForm.addEventListener("focusin", () => {
            this.validateForm();
        });

        this._nameBox.addEventListener("input", () => {
            this.validateNameField();
        });

        this._emailBox.addEventListener("input", () => {
            this.validateEmailField();
        });

        this._messageBox.addEventListener("input", () => {
            this.validateMessageField();
        });
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

    private hideAllErrorBox() {
        this._nameErrorBox.style.opacity = "0";
        this._emailErrorBox.style.opacity = "0";
        this._messageErrorBox.style.opacity = "0";
    }

    private validateNameField(): boolean {
        const nameValue = this._nameBox.value.trim();
        let isNameFieldValid = true;
        const nameErrorBoxTranslationValue = translation[Translator.CurrentLanguage].contactFormErrorMessage.nameFieldLength;

        if (nameValue.length < 2 || nameValue.length > 20) {
            isNameFieldValid = false;
            this._nameErrorBox.style.opacity = "1";
            this._nameErrorBox.innerHTML = nameErrorBoxTranslationValue;
        }

        if (isNameFieldValid)
            this._nameErrorBox.style.opacity = "0";

        return isNameFieldValid;
    }

    private validateEmailField(): boolean {
        const emailValue = this._emailBox.value.trim();
        let isEmailFieldValid = true;
        const emailErrorBoxTranslationValue = translation[Translator.CurrentLanguage].contactFormErrorMessage.emailFieldFormat;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!emailPattern.test(emailValue)) {
            isEmailFieldValid = false;
            this._emailErrorBox.style.opacity = "1";
            this._emailErrorBox.innerHTML = emailErrorBoxTranslationValue;
        }

        if (isEmailFieldValid)
            this._emailErrorBox.style.opacity = "0";

        return isEmailFieldValid;
    }

    private validateMessageField(): boolean {
        const messageValue = this._messageBox.value.trim();
        let isMessageFieldValid = true;
        const messageErrorBoxTranslationValue = translation[Translator.CurrentLanguage].contactFormErrorMessage.messageFieldLength;

        if (messageValue.length < 25) {
            isMessageFieldValid = false;
            this._messageErrorBox.style.opacity = "1";
            this._messageErrorBox.innerHTML = messageErrorBoxTranslationValue;
        }

        if (isMessageFieldValid)
            this._messageErrorBox.style.opacity = "0";

        return isMessageFieldValid;
    }

    public validateForm(): boolean {
        const isNameFieldValid = this.validateNameField();
        const isEmailFieldValid = this.validateEmailField();
        const isMessageFieldValid = this.validateMessageField();

        return isNameFieldValid && isEmailFieldValid && isMessageFieldValid;
    }

    public sendEmail = async () => {
        const emailJSBody = this.getEmailJSBody();

        showNotification(translation[Translator.CurrentLanguage].notification.successEmailSend, "green");

        if (!this.validateForm())
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
                showNotification(translation[Translator.CurrentLanguage].notification.successEmailSend, "green");
                this.setEmailSendedState();
            }
        }
        catch (err) {
            showNotification(translation[Translator.CurrentLanguage].notification.failedEmailSend, "orangered");
            console.error(`EmailJS err: ${err}`);
        }
    }
}

"email has been sended!"
"email send failed."

export default ContactFormEventer;