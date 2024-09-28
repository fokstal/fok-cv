export default class Layout {
    container = null;
    basePageName = "";
    pageList = [];

    constructor(container, basePageName) {
        if (container == null || basePageName == null)
            throw new Error("Init values is failed!");

        this.container = container;
        this.basePageName = basePageName;
    }

    async init() {
        const aboutLayout = await this.getLayoutFromFile("./components/about.html");
        const contactLayout = await this.getLayoutFromFile("./components/contact.html");
        const expLayout = await this.getLayoutFromFile("./components/exp.html");
        const footerLayout = await this.getLayoutFromFile("./components/footer.html");
        const headerLayout = await this.getLayoutFromFile("./components/header.html");
        const homeLayout = await this.getLayoutFromFile("./components/home.html");

        this.pageList = {
            homePage: this.combineLayout(homeLayout, footerLayout),
            expPage: this.combineLayout(headerLayout, expLayout, footerLayout),
            aboutPage: this.combineLayout(headerLayout, aboutLayout, footerLayout),
            contactPage: this.combineLayout(headerLayout, contactLayout, footerLayout),
        }

        this.container.innerHTML = this.pageList[this.basePageName + "Page"];
    }

    async getLayoutFromFile(pathToPage) {
        const resp = await fetch(pathToPage)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Сеть не в порядке: " + response.statusText);
                }
                return response.text();
            })
            .then(layout => {
                return layout;
            })
            .catch(error => {
                console.error("Ошибка при загрузке компонента:", error);
            });

        return resp;
    }

    combineLayout(...layoutList) {
        let result = "";

        layoutList.forEach(layout => {
            result += layout + "\n";
        });

        return result;
    }

    changePageByLink(pageName) {
        const container = this.container;

        container.classList.add("fade-out");

        setTimeout(() => {
            container.innerHTML = this.pageList[pageName + "Page"];

            container.classList.remove("fade-out");
        }, 200);
    }
}