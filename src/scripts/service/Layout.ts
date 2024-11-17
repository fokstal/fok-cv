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
}

export default Layout;
