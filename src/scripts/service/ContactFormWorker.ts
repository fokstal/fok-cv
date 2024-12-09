import translation from "@scripts/const/translation";
import { getElementFromDocument } from "@scripts/helpers/elements";
import EmailJSBodyType from "@scripts/models/EmailJSBodyType";
import Translator from "@scripts/service/Translator";
import showNotification from "@scripts/service/functions/showNotification";
import { decrypt } from "@scripts/service/functions/crypto";
import EMAIL_JS_DATA from "@scripts/const/EmailJS";
import Captcha from "@scripts/service/Captcha";

class ContactFormWorker {
    private _contactForm: HTMLFormElement;
    private _nameBox: HTMLInputElement;
    private _nameErrorBox: HTMLSpanElement;
    private _emailBox: HTMLInputElement;
    private _emailErrorBox: HTMLSpanElement;
    private _messageBox: HTMLInputElement;
    private _messageErrorBox: HTMLSpanElement;
    private _writeMessageBlockImg: HTMLImageElement;
    private _captcha: Captcha;

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

        this._nameBox.addEventListener("focusin", () => {
            this.validateNameField();
        });

        this._emailBox.addEventListener("focusin", () => {
            this.validateEmailField();
        });

        this._messageBox.addEventListener("focusin", () => {
            this.validateMessageField();
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

        this._captcha = new Captcha();
    }

    private getEmailJSBody(): EmailJSBodyType {
        return {
            service_id: decrypt(EMAIL_JS_DATA.service_id, EMAIL_JS_DATA.password),
            template_id: decrypt(EMAIL_JS_DATA.template_id, EMAIL_JS_DATA.password),
            user_id: decrypt(EMAIL_JS_DATA.user_id, EMAIL_JS_DATA.password),
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
        this._captcha.reset();

        setTimeout(() => {
            this._writeMessageBlockImg.classList.remove("element-rotate");
        }, 1000);
    }

    private hideAllErrorBox() {
        this._nameErrorBox.style.opacity = "0";
        this._emailErrorBox.style.opacity = "0";
        this._messageErrorBox.style.opacity = "0";
    }

    private colorErrorBox(color: string, ...errorBoxList: HTMLElement[]) {
        errorBoxList.forEach(errorBox => {
            errorBox.style.color = color;
        })
    }

    private visibleErrorBox(message: string, color: string, ...errorBoxList: HTMLElement[]) {
        errorBoxList.forEach(errorBox => {
            errorBox.style.opacity = "1";
            errorBox.innerHTML = message;
            errorBox.style.color = color;
        })
    }

    private validateNameField(): boolean {
        const nameValue = this._nameBox.value.trim();
        let isNameFieldValid = true;
        const nameErrorBoxTranslationValue = translation[Translator.CurrentLanguage].contactFormErrorMessage.nameFieldLength;

        if (nameValue.length < 2 || nameValue.length > 20) {
            isNameFieldValid = false;
            this.visibleErrorBox(nameErrorBoxTranslationValue, "#434343", this._nameErrorBox);
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
            this.visibleErrorBox(emailErrorBoxTranslationValue, "#434343", this._emailErrorBox);
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
            this.visibleErrorBox(messageErrorBoxTranslationValue, "#434343", this._messageErrorBox);
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

        if (!this.validateForm()) {
            this.colorErrorBox("orangered", this._nameErrorBox, this._emailErrorBox, this._messageErrorBox);
            return;
        }

        if (!this._captcha.IsCaptchaSuccess) {
            this._captcha.test();
            return;
        }

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

export default ContactFormWorker;