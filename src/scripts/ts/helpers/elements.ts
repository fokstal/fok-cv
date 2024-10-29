function getElementFromDocument<T extends HTMLElement>(selector: string): T {
    const element = document.querySelector(selector) as T;
    if (!element) {
        throw new Error(`${selector} is null!`);
    }
    return element;
}

function convertElement<T extends HTMLElement>(el: any): T {
    const convertedEl = el as T;

    if (!convertedEl) {
        throw new Error(`This element type is not ${typeof convertedEl}`);
    }

    return convertedEl;
}

export { getElementFromDocument, convertElement };