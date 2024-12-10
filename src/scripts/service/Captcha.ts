import { getElementFromDocument } from "@scripts/helpers/elements";
import getRandomAlphanumericCharacter from "@scripts/helpers/getRandomAlphanumericCharacter";
import Layout from "./Layout";

type CaptchaElementListType = {
    canvas: HTMLCanvasElement,
    ctrl: HTMLDivElement,
    textBox: HTMLInputElement,
    resetBtn: HTMLButtonElement,
    submitBtn: HTMLButtonElement,
}

type CaptchaSelectorForElementListType = {
    canvas: string,
    ctrl: string,
    textBox: string,
    resetBtn: string,
    submitBtn: string,
}

const default_captchaSelectorForElementList: CaptchaSelectorForElementListType = {
    canvas: "#captchaCanvas",
    ctrl: "#captchaCtrl",
    textBox: "#captchaInput",
    resetBtn: "#captchaResetBtn",
    submitBtn: "#captchaSubmitBtn",
}

class Captcha {
    private _elementList: CaptchaElementListType;
    private _challengeLine = "";
    private _challengeLineLength = 6;
    private _isSuccess = false;

    public get ChallengeLine() {
        return this._challengeLine;
    }

    public get IsSuccess() {
        return this._isSuccess;
    }

    public get ChallengeLineLength() {
        return this._challengeLineLength;
    }
    public set ChallengeLineLength(length: number) {
        this._challengeLineLength = length;
    }

    public constructor(selectorForElementList: CaptchaSelectorForElementListType = default_captchaSelectorForElementList) {
        this._elementList = Layout.getElementsBySelectorList<CaptchaElementListType, CaptchaSelectorForElementListType>(selectorForElementList);

        this.setEventListeners();

        this.print();
    }

    public test() {
        this._isSuccess = this._elementList.textBox.value === this._challengeLine;

        this._elementList.submitBtn.style.color = this._isSuccess ? "green" : "orangered";
    }

    public reset() {
        this._isSuccess = false;
        this._elementList.textBox.value = "";
        this.print();

        this._elementList.resetBtn.classList.add("rotate");

        setTimeout(() => {
            this._elementList.resetBtn.classList.remove("rotate");
        }, 500)

        this._elementList.submitBtn.style.color = "#434343";
    }

    private setEventListeners() {
        this._elementList.resetBtn.addEventListener("click", this.reset.bind(this));
        this._elementList.submitBtn.addEventListener("click", this.test.bind(this));
        this._elementList.textBox.addEventListener("focusout", this.test.bind(this));
    }

    private print() {
        this.generateLine();
        this.drawLineToCanvas();
    }

    private generateLine() {
        let line = "";

        for (let i = 0; i < this._challengeLineLength; i++) {
            line += getRandomAlphanumericCharacter();
        }

        this._challengeLine = line;
    }

    private drawLineToCanvas() {
        const canvas = this._elementList.canvas;
        const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.font = "16px 'sans-serif'";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#434343";

        ctx.fillText(this._challengeLine, canvas.width / 2, canvas.height / 1.5);
    }
}

export default Captcha;