import { getElementFromDocument } from "@scripts/helpers/elements";
import getRandomAlphanumericCharacter from "@scripts/helpers/getRandomAlphanumericCharacter";

type CaptchaElementsType = {
    canvas: HTMLCanvasElement,
    ctrl: HTMLDivElement,
    textBox: HTMLInputElement,
    resetBtn: HTMLButtonElement,
    submitBtn: HTMLButtonElement,
}

class CaptchaBlockWorker {
    private _captchaElements: CaptchaElementsType;
    private _captchaLine = "";
    public _isCaptchaSuccess = false;

    public constructor() {
        this._captchaElements = {
            canvas: getElementFromDocument<HTMLCanvasElement>("#captchaCanvas"),
            ctrl: getElementFromDocument<HTMLDivElement>("#captchaCtrl"),
            textBox: getElementFromDocument<HTMLInputElement>("#captchaInput"),
            resetBtn: getElementFromDocument<HTMLButtonElement>("#captchaResetBtn"),
            submitBtn: getElementFromDocument<HTMLButtonElement>("#captchaSubmitBtn"),
        };

        this._captchaElements.resetBtn.addEventListener("click", this.resetCaptcha.bind(this));
        this._captchaElements.submitBtn.addEventListener("click", this.testCaptcha.bind(this));
        this._captchaElements.textBox.addEventListener("focusout", this.testCaptcha.bind(this));

        this.printCaptcha();
    }

    public testCaptcha() {
        this._isCaptchaSuccess = this._captchaElements.textBox.value === this._captchaLine;

        this._captchaElements.submitBtn.style.color = this._isCaptchaSuccess ? "green" : "orangered";
    }

    public resetCaptcha() {
        this._isCaptchaSuccess = false;
        this._captchaElements.textBox.value = "";
        this.printCaptcha();

        this._captchaElements.resetBtn.classList.add("rotate");

        setTimeout(() => {
            this._captchaElements.resetBtn.classList.remove("rotate");
        }, 500)

        this._captchaElements.submitBtn.style.color = "#434343";
    }

    private setCaptchaLine(lineLength: number) {
        let line = "";

        for (let i = 0; i < lineLength; i++) {
            line += getRandomAlphanumericCharacter();
        }

        this._captchaLine = line;
    }

    private drawCaptchaLineOnCanvas() {
        const canvas = this._captchaElements.canvas;
        const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.font = "16px 'sans-serif'";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#434343";

        ctx.fillText(this._captchaLine, canvas.width / 2, canvas.height / 1.5);
    }

    private printCaptcha() {
        this.setCaptchaLine(6);
        this.drawCaptchaLineOnCanvas();
    }
}

export default CaptchaBlockWorker;