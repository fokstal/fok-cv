import { getElementFromDocument } from "@scripts/helpers/elements";

class Layout {
    public static getChartTooltip = (bodyLayout: string, titleText?: string): string => {
        const titleEl = document.createElement("h3");
        const bodyEl = document.createElement("div");

        if (titleText) {
            titleEl.textContent = titleText;
            titleEl.style.fontSize = "24px";
        }

        bodyEl.innerHTML = bodyLayout;
        bodyEl.style.textAlign = "left";

        return titleEl.textContent ? `${titleEl.outerHTML}<br>${bodyEl.outerHTML}` : bodyEl.outerHTML;
    }

    public static getElementsBySelectorList
        <TElementList extends Record<string, HTMLElement>, TSelectorList extends Record<string, string>>
        (selectorList: TSelectorList): TElementList {
        const elements: Partial<TElementList> = {} as TElementList;

        for (const selector in selectorList) {
            if (selectorList.hasOwnProperty(selector)) {
                elements[selector] = getElementFromDocument<HTMLElement>(selectorList[selector]) as TElementList[typeof selector];
            }
        }

        return elements as TElementList;
    }
}

export default Layout;
