const sessionKey = {
    currentPage: "currentPage",
}

export default class Layout {
    container = null;
    basePageName = "";
    pageList = [];

    constructor(container, basePageName) {
        if (container == null || basePageName == null)
            throw new Error("Init values is failed!");

        this.container = container;
        this.basePageName = basePageName;

        if (!sessionStorage.getItem(sessionKey.currentPage))
            sessionStorage.setItem(sessionKey.currentPage, this.basePageName);
    }

    async init() {
        const aboutLayout = await this.getLayoutFromFile("./components/about.html");
        const contactLayout = await this.getLayoutFromFile("./components/contact.html");
        const expLayout = await this.getLayoutFromFile("./components/exp.html");
        const headerLayout = await this.getLayoutFromFile("./components/header.html");
        const homeLayout = await this.getLayoutFromFile("./components/home.html");

        this.pageList = {
            homePage: this.combineLayout(homeLayout),
            expPage: this.combineLayout(headerLayout, expLayout),
            aboutPage: this.combineLayout(headerLayout, aboutLayout),
            contactPage: this.combineLayout(headerLayout, contactLayout),
        }
        
        let pageName = sessionStorage.getItem(sessionKey.currentPage);
        this.container.innerHTML = this.pageList[pageName + "Page"];
        document.title = "fok ∙ " + pageName;
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
        sessionStorage.setItem(sessionKey.currentPage, pageName);

        container.classList.add("fade-out");

        setTimeout(() => {
            container.innerHTML = this.pageList[pageName + "Page"];
            document.title = "fok ∙ " + pageName;

            container.classList.remove("fade-out");
        }, 200);
    }
}