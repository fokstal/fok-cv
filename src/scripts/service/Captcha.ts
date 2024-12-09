import { getElementFromDocument } from "@scripts/helpers/elements";
import getRandomAlphanumericCharacter from "@scripts/helpers/getRandomAlphanumericCharacter";

type CaptchaElementListType = {
    canvas: HTMLCanvasElement,
    ctrl: HTMLDivElement,
    textBox: HTMLInputElement,
    resetBtn: HTMLButtonElement,
    submitBtn: HTMLButtonElement,
}

type CaptchaSelectorListType = {
    canvas: string,
    ctrl: string,
    textBox: string,
    resetBtn: string,
    submitBtn: string,
}

const default_captchaSelectorList: CaptchaSelectorListType = {
    canvas: "#captchaCanvas",
    ctrl: "#captchaCtrl",
    textBox: "#captchaInput",
    resetBtn: "#captchaResetBtn",
    submitBtn: "#captchaSubmitBtn",
}

class Captcha {
    private _captchaElementList: CaptchaElementListType;
    private _captchaLine = "";
    private _isCaptchaSuccess = false;
    private _captchaLength = 6;

    public get CaptchaLine() {
        return this._captchaLine;
    }

    public get IsCaptchaSuccess() {
        return this._isCaptchaSuccess;
    }

    public get CaptchaLength() {
        return this._captchaLength;
    }
    public set CaptchaLength(length: number) {
        this._captchaLength = length;
    }

    public constructor(captchaSelectorList: CaptchaSelectorListType = default_captchaSelectorList) {
        this._captchaElementList = Captcha.getElementsBySelectorList(captchaSelectorList);

        this.setEventListeners();

        this.print();
    }

    public test() {
        this._isCaptchaSuccess = this._captchaElementList.textBox.value === this._captchaLine;

        this._captchaElementList.submitBtn.style.color = this._isCaptchaSuccess ? "green" : "orangered";
    }

    public reset() {
        this._isCaptchaSuccess = false;
        this._captchaElementList.textBox.value = "";
        this.print();

        this._captchaElementList.resetBtn.classList.add("rotate");

        setTimeout(() => {
            this._captchaElementList.resetBtn.classList.remove("rotate");
        }, 500)

        this._captchaElementList.submitBtn.style.color = "#434343";
    }

    private setEventListeners() {
        this._captchaElementList.resetBtn.addEventListener("click", this.reset.bind(this));
        this._captchaElementList.submitBtn.addEventListener("click", this.test.bind(this));
        this._captchaElementList.textBox.addEventListener("focusout", this.test.bind(this));
    }

    private print() {
        this.generateLine();
        this.drawLineToCanvas();
    }

    private generateLine() {
        let line = "";

        for (let i = 0; i < this._captchaLength; i++) {
            line += getRandomAlphanumericCharacter();
        }

        this._captchaLine = line;
    }

    private drawLineToCanvas() {
        const canvas = this._captchaElementList.canvas;
        const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.font = "16px 'sans-serif'";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#434343";

        ctx.fillText(this._captchaLine, canvas.width / 2, canvas.height / 1.5);
    }

    public static getElementsBySelectorList(selectorList: CaptchaSelectorListType): CaptchaElementListType {
        return {
            canvas: getElementFromDocument<HTMLCanvasElement>(selectorList.canvas),
            ctrl: getElementFromDocument<HTMLDivElement>(selectorList.ctrl),
            textBox: getElementFromDocument<HTMLInputElement>(selectorList.textBox),
            resetBtn: getElementFromDocument<HTMLButtonElement>(selectorList.resetBtn),
            submitBtn: getElementFromDocument<HTMLButtonElement>(selectorList.submitBtn),
        }
    }
}

export default Captcha;