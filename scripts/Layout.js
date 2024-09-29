const sessionKey = {
    currentPage: "currentPage",
}

export default class Layout {
    root = null;
    basePageName = "";
    languageWorker = null;
    pageList = [];

    constructor(root, basePageName, languageWorker) {
        if (!root || !basePageName || !languageWorker)
            throw new Error("Init values is failed!");

        this.root = root;
        this.basePageName = basePageName;
        this.languageWorker = languageWorker;

        if (!sessionStorage.getItem(sessionKey.currentPage))
            sessionStorage.setItem(sessionKey.currentPage, this.basePageName);
    }

    async init() {
        this.pageList = {
            homePage: await this.getLayoutFromFile("./pages/home.html"),
            expPage: await this.getLayoutFromFile("./pages/exp.html"),
            aboutPage: await this.getLayoutFromFile("./pages/about.html"),
            contactPage: await this.getLayoutFromFile("./pages/contact.html"),
        }

        let pageName = sessionStorage.getItem(sessionKey.currentPage);
        this.root.innerHTML = this.pageList[pageName + "Page"];
        document.title = "fok ∙ " + pageName;

        if (pageName === "home")
            document.querySelector(".logo").classList.add("home");
        else
            document.querySelector(".logo").classList.remove("home");

        this.languageWorker.translateSite();
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
        const container = this.root;
        sessionStorage.setItem(sessionKey.currentPage, pageName);

        container.classList.add("fade-out");

        setTimeout(() => {
            container.innerHTML = this.pageList[pageName + "Page"];
            document.title = "fok ∙ " + pageName;

            container.classList.remove("fade-out");

            const currentPage = sessionStorage.getItem(sessionKey.currentPage);

            if (pageName === "home")
                document.querySelector(".logo").classList.add("home");
            else
                document.querySelector(".logo").classList.remove("home");

            document
                .querySelector(".links")
                .querySelectorAll("a")
                .forEach(aEl => {
                    if (aEl.textContent === currentPage)
                        aEl.classList.add("selected");
                    else
                        aEl.classList.remove("selected");
                });

                this.languageWorker.translateSite();
        }, 200);
    }
}