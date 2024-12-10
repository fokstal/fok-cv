import translation from "@scripts/const/translation";
import EmailJSBodyType from "@scripts/models/EmailJSBodyType";
import Translator from "@scripts/service/components/Translator";
import showNotification from "@scripts/service/functions/showNotification";
import { decrypt } from "@scripts/service/functions/crypto";
import EMAIL_JS_DATA from "@scripts/const/EmailJS";
import Captcha from "@scripts/service/components/Captcha";
import Layout from "@scripts/service/Layout";

type ContactFormElementListType = {
    form: HTMLFormElement,
    nameBox: HTMLInputElement,
    nameErrorBox: HTMLSpanElement,
    emailBox: HTMLInputElement,
    emailErrorBox: HTMLSpanElement,
    messageBox: HTMLInputElement,
    messageErrorBox: HTMLSpanElement,
    writeMessageBlockImg: HTMLImageElement,
}

type ContactFormSelectorForElementListType = {
    form: string,
    nameBox: string,
    nameErrorBox: string,
    emailBox: string,
    emailErrorBox: string,
    messageBox: string,
    messageErrorBox: string,
    writeMessageBlockImg: string,
}

const default_contactFormSelectorForElementList: ContactFormSelectorForElementListType = {
    form: "#contactForm",
    nameBox: "#contactFormNameBox",
    nameErrorBox: "#contactFormNameErrorBox",
    emailBox: "#contactFormEmailBox",
    emailErrorBox: "#contactFormEmailErrorBox",
    messageBox: "#contactFormMessageBox",
    messageErrorBox: "#contactFormMessageErrorBox",
    writeMessageBlockImg: "#contactWriteMessageBlockImg",
}

class ContactForm {
    private _elementList: ContactFormElementListType;
    private _captcha: Captcha;

    public constructor(selectorForElementList: ContactFormSelectorForElementListType = default_contactFormSelectorForElementList) {
        this._elementList = Layout.getElementsBySelectorList
            <ContactFormElementListType, ContactFormSelectorForElementListType>(selectorForElementList);

        this.setEventListeners();

        this._captcha = new Captcha();
    }

    public validate(): boolean {
        const isNameFieldValid = this.validateNameField();
        const isEmailFieldValid = this.validateEmailField();
        const isMessageFieldValid = this.validateMessageField();

        return isNameFieldValid && isEmailFieldValid && isMessageFieldValid;
    }

    public submit = async () => {
        const emailJSBody = this.generateEmailJSBody();

        if (!this.validate()) {
            this.colorErrorBox("orangered", this._elementList.nameErrorBox, this._elementList.emailErrorBox, this._elementList.messageErrorBox);
            return;
        }

        if (!this._captcha.IsSuccess) {
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
                showNotification(translation[Translator.CurrentLanguageFromStorage].notification.successEmailSend, "green");
                this.setEmailSendedState();
            }
        }
        catch (err) {
            showNotification(translation[Translator.CurrentLanguageFromStorage].notification.failedEmailSend, "orangered");
            console.error(`EmailJS err: ${err}`);
        }
    }

    private setEventListeners() {
        this._elementList.form.addEventListener("focusout", this.hideAllErrorBox.bind(this));

        this._elementList.nameBox.addEventListener("focusin", this.validateNameField.bind(this));
        this._elementList.emailBox.addEventListener("focusin", this.validateEmailField.bind(this));
        this._elementList.messageBox.addEventListener("focusin", this.validateMessageField.bind(this));

        this._elementList.nameBox.addEventListener("input", this.validateNameField.bind(this));
        this._elementList.emailBox.addEventListener("input", this.validateEmailField.bind(this));
        this._elementList.messageBox.addEventListener("input", this.validateMessageField.bind(this));
    }

    private generateEmailJSBody(): EmailJSBodyType {
        return {
            service_id: decrypt(EMAIL_JS_DATA.service_id, EMAIL_JS_DATA.password),
            template_id: decrypt(EMAIL_JS_DATA.template_id, EMAIL_JS_DATA.password),
            user_id: decrypt(EMAIL_JS_DATA.user_id, EMAIL_JS_DATA.password),
            template_params: {
                name: this._elementList.nameBox.value.trim(),
                email: this._elementList.emailBox.value.trim(),
                message: this._elementList.messageBox.value.trim(),
            },
        }
    }

    private setEmailSendedState() {
        this._elementList.writeMessageBlockImg.classList.add("element-rotate");

        this._elementList.nameBox.value = "";
        this._elementList.emailBox.value = "";
        this._elementList.messageBox.value = "";
        this._captcha.reset();

        setTimeout(() => {
            this._elementList.writeMessageBlockImg.classList.remove("element-rotate");
        }, 1000);
    }

    private hideAllErrorBox() {
        this._elementList.nameErrorBox.style.opacity = "0";
        this._elementList.emailErrorBox.style.opacity = "0";
        this._elementList.messageErrorBox.style.opacity = "0";
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
        const nameValue = this._elementList.nameBox.value.trim();
        let isNameFieldValid = true;
        const nameErrorBoxTranslationValue = translation[Translator.CurrentLanguageFromStorage].contactFormErrorMessage.nameFieldLength;

        if (nameValue.length < 2 || nameValue.length > 20) {
            isNameFieldValid = false;
            this.visibleErrorBox(nameErrorBoxTranslationValue, "#434343", this._elementList.nameErrorBox);
        }

        if (isNameFieldValid)
            this._elementList.nameErrorBox.style.opacity = "0";

        return isNameFieldValid;
    }

    private validateEmailField(): boolean {
        const emailValue = this._elementList.emailBox.value.trim();
        let isEmailFieldValid = true;
        const emailErrorBoxTranslationValue = translation[Translator.CurrentLanguageFromStorage].contactFormErrorMessage.emailFieldFormat;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!emailPattern.test(emailValue)) {
            isEmailFieldValid = false;
            this.visibleErrorBox(emailErrorBoxTranslationValue, "#434343", this._elementList.emailErrorBox);
        }

        if (isEmailFieldValid)
            this._elementList.emailErrorBox.style.opacity = "0";

        return isEmailFieldValid;
    }

    private validateMessageField(): boolean {
        const messageValue = this._elementList.messageBox.value.trim();
        let isMessageFieldValid = true;
        const messageErrorBoxTranslationValue = translation[Translator.CurrentLanguageFromStorage].contactFormErrorMessage.messageFieldLength;

        if (messageValue.length < 25) {
            isMessageFieldValid = false;
            this.visibleErrorBox(messageErrorBoxTranslationValue, "#434343", this._elementList.messageErrorBox);
        }

        if (isMessageFieldValid)
            this._elementList.messageErrorBox.style.opacity = "0";

        return isMessageFieldValid;
    }
}

export default ContactForm;