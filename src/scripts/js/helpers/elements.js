function getElementFromDocument(selector) {
    const element = document.querySelector(selector);
    if (!element) {
        throw new Error(`${selector} is null!`);
    }
    return element;
}
function getElementListFromDocument(selector) {
    const element = document.querySelectorAll(selector);
    if (!element) {
        throw new Error(`${selector} is null!`);
    }
    return element;
}
function convertElement(el) {
    const convertedEl = el;
    if (!convertedEl) {
        throw new Error(`This element type is not ${typeof convertedEl}`);
    }
    return convertedEl;
}
export { getElementFromDocument, getElementListFromDocument, convertElement };
