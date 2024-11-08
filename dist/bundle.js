/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/ts/const/const.ts":
/*!***************************************!*\
  !*** ./src/scripts/ts/const/const.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   COMPONENT_NAMES: () => (/* binding */ COMPONENT_NAMES),\n/* harmony export */   FOLDERS: () => (/* binding */ FOLDERS),\n/* harmony export */   ICON_FULLNAMES: () => (/* binding */ ICON_FULLNAMES),\n/* harmony export */   LANGUAGE_ENUM: () => (/* binding */ LANGUAGE_ENUM),\n/* harmony export */   PAGE_NAME_ENUM: () => (/* binding */ PAGE_NAME_ENUM),\n/* harmony export */   STORAGE_KEYS: () => (/* binding */ STORAGE_KEYS)\n/* harmony export */ });\nvar LANGUAGE_ENUM;\n(function (LANGUAGE_ENUM) {\n    LANGUAGE_ENUM[\"BY\"] = \"BY\";\n    LANGUAGE_ENUM[\"EN\"] = \"EN\";\n    LANGUAGE_ENUM[\"RU\"] = \"RU\";\n})(LANGUAGE_ENUM || (LANGUAGE_ENUM = {}));\nvar PAGE_NAME_ENUM;\n(function (PAGE_NAME_ENUM) {\n    PAGE_NAME_ENUM[\"home\"] = \"home\";\n    PAGE_NAME_ENUM[\"exp\"] = \"exp\";\n    PAGE_NAME_ENUM[\"about\"] = \"about\";\n    PAGE_NAME_ENUM[\"contact\"] = \"contact\";\n})(PAGE_NAME_ENUM || (PAGE_NAME_ENUM = {}));\nconst STORAGE_KEYS = {\n    local: {\n        currentLanguage: \"currentLanguage\",\n    },\n    session: {\n        currentPage: \"currentPage\",\n        isAccessMode: \"isAccessMode\",\n    },\n};\nconst FOLDERS = {\n    src: \"/src/\",\n    icons: {\n        index: \"/src/icons/\",\n        any: \"/src/icons/any/\"\n    },\n    components: {\n        index: \"/src/components/\",\n        pages: \"/src/components/pages/\",\n    },\n};\nconst ICON_FULLNAMES = {\n    eye: \"eye.svg\",\n    eyeClosed: \"eye-closed.svg\",\n};\nconst COMPONENT_NAMES = {\n    header: \"header\",\n    pages: {\n        home: \"home\",\n        exp: \"exp\",\n        about: \"about\",\n        contact: \"contact\",\n    },\n    footer: \"footer\",\n    overlay: \"overlay\",\n    imgModal: \"imgModal\",\n};\n\n\n\n//# sourceURL=webpack://fok-cv/./src/scripts/ts/const/const.ts?");

/***/ }),

/***/ "./src/scripts/ts/const/translation.ts":
/*!*********************************************!*\
  !*** ./src/scripts/ts/const/translation.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst translation = {\n    BY: {\n        // і\n        // ў\n        innerHtml: {\n            // home page\n            helloText: `\n        Прывітанне!<br>\n        Мяне клічуць <strong>Кірыл</strong><br>\n        і я <strong>.NET разработчык!</strong><br>\n    `,\n            // exp page\n            exp: \"вопыт\",\n            workListTitle: \"Вопыт працы\",\n            ngaekTitle: `\n        Установа адукацыі\n        <br>\n        \"Навапольскі дзяржаўны аграрна-эканамічны каледж\"\n    `,\n            ngaekPosition: \"Тэхнік-праграміст\",\n            ngaekExpMarkedList: `\n        <li>канфігураваў лакальную сетку</li>\n        <li>раманціраваў і ўсталёўваў камп'ютары</li>\n        <li>падтрымліваў базу даных студэнтаў</li>\n        <li>суправаджаў відэаканферэнцыі</li>\n        <li>распрацоўваў міні-прыкладанні</li>\n        <li>выкладаў практыку аператара ЭВМ</li>\n    `,\n            courseListTitle: \"Курсы\",\n            udemyTitle: \"Udemy.com\",\n            udemyCourseName: \"ASP.NET Core MVC. Частка 1\",\n            skillsTitle: \"Навыкі\",\n            andAlsoText: \"а таксама...\",\n            // about page\n            about: \"пра мяне\",\n            startTitle: \"Мяне завуць Кірыл Лабуць, прывітанне!\",\n            startText: \"Lorem іpsum dolor sіt amet\",\n            educationTitle: \"Адукацыя\",\n            educationText: \"Lorem іpsum dolor sіt amet\",\n            hobbyTitle: \"Заняткі\",\n            hobbySoccer: \"я гуляю ў футбол\",\n            hobbyBasketball: \"таксама ў баскетбол\",\n            hobbyAnyBall: \"ў любыя гульні з мячом...\",\n            hobbyLoveSport: \"Я люблю спорт!\",\n            hobbyAny: \"Актыўна чытаю кнігі і смачна гатую\",\n            hobbyMe: \"гэта я\",\n            // contact page\n            contact: \"кантакты\",\n            writeMe: \"Напісаць мне\",\n            nameForm: \"імя\",\n            emailForm: \"электронная пошта\",\n            messageForm: \"паведамленне\",\n            btnForm: \"адправіць\",\n            moreLinks: \"больш спасылак\",\n        },\n        title: {\n            shareLink: \"Падзяліцца спасылкай на старонку\",\n            changeLanguage: \"Змяніць мову\",\n            accessMode: \"Версія для людзей са слабым зрокам\",\n        },\n        imageAlt: {\n            udemyCertificate: \"Сертыфікат па ASP.NET Core MVC. Частка 1\",\n            myAvatar: \"Мой аватар\",\n            collegePhoto: \"Фота каледжа\",\n            meAndFootballTeam: \"Фота са мной і маёй футбольнай камандай\",\n            meAndFiendInPingPong: \"Фотаздымак мяне і майго сябра, якія гуляюць у настольны тэніс\",\n            meAndMyGirlfriend: \"Фота са мной і маёй дзяўчынай\",\n            pigeonImg: \"Малюнак з галубамі\",\n        },\n        chartTitle: {\n            itLanguage: \"Веды моў праграмавання\",\n            libAndFw: \"Веды бібліятэк і фрэймворкаў\",\n            commitFreq: \"Частата камітаў на GitHub\",\n        }\n    },\n    RU: {\n        innerHtml: {\n            // home page\n            helloText: `\n        Доброго дня!<br>\n        Меня зовут <strong>Кирилл</strong><br>\n        и я <strong>.NET Разработчик!</strong><br>\n    `,\n            // exp page\n            exp: \"опыт\",\n            workListTitle: \"Опыт работы\",\n            ngaekTitle: `\n        Учреждение образования\n        <br>\n        \"Новопольский государственный аграрно-экономический колледж\"\n    `,\n            ngaekPosition: \"Техник-программист\",\n            ngaekExpMarkedList: `\n        <li>конфигурировал локальную сеть</li>\n        <li>ремонтировал и устанавливал компьютеры</li>\n        <li>поддерживал базу данных студентов</li>\n        <li>сопровождал видеоконференции</li>\n        <li>разрабатывал мини-приложения</li>\n        <li>преподавал практику оператора ЭВМ</li>\n    `,\n            courseListTitle: \"Курсы\",\n            udemyTitle: \"Udemy.com\",\n            udemyCourseName: \"ASP.NET Core MVC. Часть 1\",\n            skillsTitle: \"Навыки\",\n            andAlsoText: \"а также...\",\n            // about page\n            about: \"обо мне\",\n            startTitle: \"Меня зовут Кирилл Лабуть, привет!\",\n            startText: \"Lorem ipsum dolor sit amet\",\n            educationTitle: \"Образование\",\n            educationText: \"Lorem ipsum dolor sit amet\",\n            hobbyTitle: \"Хобби\",\n            hobbySoccer: \"я играю в футбол\",\n            hobbyBasketball: \"и в баскетбол\",\n            hobbyAnyBall: \"в любые игры с мячом...\",\n            hobbyLoveSport: \"Я люблю спорт!\",\n            hobbyAny: \"Активно читаю книги и вкусно готовлю\",\n            hobbyMe: \"это я\",\n            // contact page\n            contact: \"контакты\",\n            writeMe: \"Написать мне\",\n            nameForm: \"имя\",\n            emailForm: \"электронная почта\",\n            messageForm: \"сообщение\",\n            btnForm: \"отправить\",\n            moreLinks: \"больше ссылок\",\n        },\n        title: {\n            shareLink: \"Поделиться ссылкой на страницу\",\n            changeLanguage: \"Изменить язык\",\n            accessMode: \"Версия для слабовидящих\",\n        },\n        imageAlt: {\n            udemyCertificate: \"Сертификат по ASP.NET Core MVC. Часть 1\",\n            myAvatar: \"Мой аватар\",\n            collegePhoto: \"Фото колледжа\",\n            meAndFootballTeam: \"Фото со мной и моей футбольной командой\",\n            meAndFiendInPingPong: \"Фото меня и моего друга на теннисе\",\n            meAndMyGirlfriend: \"Фото меня и моей девушки\",\n            pigeonImg: \"Рисунок с голубями\",\n        },\n        chartTitle: {\n            itLanguage: \"Знание языков программирования\",\n            libAndFw: \"Знание библиотек и фреймворков\",\n            commitFreq: \"Частота коммитов на GitHub\",\n        }\n    },\n    EN: {\n        innerHtml: {\n            helloText: `\n            Hello world!<br>\n            My name is <strong>Kirill</strong><br>\n            and I am a <strong>.NET Developer!</strong><br>\n        `,\n            // exp page\n            exp: \"exp\",\n            workListTitle: \"Works\",\n            ngaekTitle: `\n            Educational institution\n            <br>\n            \"Novopolsky Agricultural and Economic College\"\n        `,\n            ngaekPosition: \"Сomputer technician\",\n            ngaekExpMarkedList: `\n            <li>configured the local network</li>\n            <li>repaired and assembled PCs</li>\n            <li>supported the database of students</li>\n            <li>video conference</li>\n            <li>developed mini-applications</li>\n            <li>taught computer operator practice</li>\n        `,\n            courseListTitle: \"Courses\",\n            udemyTitle: \"Udemy.com\",\n            udemyCourseName: \"ASP.NET Core MVC. Part 1\",\n            skillsTitle: \"Skills\",\n            andAlsoText: \"and also...\",\n            // about page\n            about: \"about\",\n            startTitle: \"I`am Kirill Labut, hi!\",\n            startText: \"Lorem ipsum dolor sit amet\",\n            educationTitle: \"Education\",\n            educationText: \"Lorem ipsum dolor sit amet\",\n            hobbyTitle: \"Hobby\",\n            hobbySoccer: \"i play in soccer\",\n            hobbyBasketball: \"and basketball\",\n            hobbyAnyBall: \"any ball game...\",\n            hobbyLoveSport: \"i love the <strong>sport!</strong>\",\n            hobbyAny: \"I am actively trying to make books and cook delicious\",\n            hobbyMe: \"it`s me\",\n            // contact page\n            contact: \"contact\",\n            writeMe: \"Write me\",\n            nameForm: \"name\",\n            emailForm: \"email\",\n            messageForm: \"message\",\n            btnForm: \"send\",\n            moreLinks: \"take more links\",\n        },\n        title: {\n            shareLink: \"Share link on site\",\n            changeLanguage: \"Change language\",\n            accessMode: \"Accessibility mode toggle\",\n        },\n        imageAlt: {\n            udemyCertificate: \"Certificate by ASP.NET Core MVC. Part 1\",\n            myAvatar: \"My avatar\",\n            collegePhoto: \"College photo\",\n            meAndFootballTeam: \"Photo with me and my football team\",\n            meAndFiendInPingPong: \"Photo of me and my friend playing ping-pong\",\n            meAndMyGirlfriend: \"Photo with me and my girlfriend\",\n            pigeonImg: \"Image with pigeons\",\n        },\n        chartTitle: {\n            itLanguage: \"IT Languages skill\",\n            libAndFw: \"Libraries and frameworks skill\",\n            commitFreq: \"Commit frequency on GitHub\",\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (translation);\n\n\n//# sourceURL=webpack://fok-cv/./src/scripts/ts/const/translation.ts?");

/***/ }),

/***/ "./src/scripts/ts/helpers/convertToEnum.ts":
/*!*************************************************!*\
  !*** ./src/scripts/ts/helpers/convertToEnum.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   convertStringToLanguageEnum: () => (/* binding */ convertStringToLanguageEnum),\n/* harmony export */   convertStringToPageNameEnum: () => (/* binding */ convertStringToPageNameEnum)\n/* harmony export */ });\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const/const */ \"./src/scripts/ts/const/const.ts\");\n\nconst convertStringToLanguageEnum = (line) => {\n    if (line in _const_const__WEBPACK_IMPORTED_MODULE_0__.LANGUAGE_ENUM)\n        return _const_const__WEBPACK_IMPORTED_MODULE_0__.LANGUAGE_ENUM[line];\n    throw new Error(\"This LANGUAGE is not supported!\");\n};\nconst convertStringToPageNameEnum = (line) => {\n    if (line in _const_const__WEBPACK_IMPORTED_MODULE_0__.PAGE_NAME_ENUM)\n        return _const_const__WEBPACK_IMPORTED_MODULE_0__.PAGE_NAME_ENUM[line];\n    throw new Error(\"This PAGE_NAME is not supported!\");\n};\n\n\n\n//# sourceURL=webpack://fok-cv/./src/scripts/ts/helpers/convertToEnum.ts?");

/***/ }),

/***/ "./src/scripts/ts/helpers/elements.ts":
/*!********************************************!*\
  !*** ./src/scripts/ts/helpers/elements.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   convertElement: () => (/* binding */ convertElement),\n/* harmony export */   getElementFromDocument: () => (/* binding */ getElementFromDocument),\n/* harmony export */   getElementListFromDocument: () => (/* binding */ getElementListFromDocument)\n/* harmony export */ });\nfunction getElementFromDocument(selector) {\n    const element = document.querySelector(selector);\n    if (!element) {\n        throw new Error(`${selector} is null!`);\n    }\n    return element;\n}\nfunction getElementListFromDocument(selector) {\n    const element = document.querySelectorAll(selector);\n    if (!element) {\n        throw new Error(`${selector} is null!`);\n    }\n    return element;\n}\nfunction convertElement(el) {\n    const convertedEl = el;\n    if (!convertedEl) {\n        throw new Error(`This element type is not ${typeof convertedEl}`);\n    }\n    return convertedEl;\n}\n\n\n\n//# sourceURL=webpack://fok-cv/./src/scripts/ts/helpers/elements.ts?");

/***/ }),

/***/ "./src/scripts/ts/index.ts":
/*!*********************************!*\
  !*** ./src/scripts/ts/index.ts ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _service_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/App */ \"./src/scripts/ts/service/App.ts\");\n\nawait _service_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"].startAsync({\n    componentElSelector: \".container\",\n    languageSelectElSelector: \".language-button-select-list\",\n    accessModeImgElSelector: \".access-mode-button-icon\",\n    imageModalElSelector: \".image-modal\",\n    imageModalContentElSelector: \".image-modal__content\",\n    overlayElSelector: \".overlay\",\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://fok-cv/./src/scripts/ts/index.ts?");

/***/ }),

/***/ "./src/scripts/ts/service/AccessModeWorker.ts":
/*!****************************************************!*\
  !*** ./src/scripts/ts/service/AccessModeWorker.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const/const */ \"./src/scripts/ts/const/const.ts\");\n/* harmony import */ var _helpers_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/elements */ \"./src/scripts/ts/helpers/elements.ts\");\n\n\nclass AccessModeWorker {\n    accessModeImgEl;\n    isAccessModeBaseValue = false;\n    _currentIsAccessMode = this.isAccessModeBaseValue;\n    get currentIsAccessMode() {\n        return this._currentIsAccessMode;\n    }\n    set currentIsAccessMode(isAccessMode) {\n        this._currentIsAccessMode = isAccessMode;\n        sessionStorage.setItem(_const_const__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.session.isAccessMode, String(isAccessMode));\n    }\n    get currentIconPath() {\n        let iconName = this.currentIsAccessMode ? _const_const__WEBPACK_IMPORTED_MODULE_0__.ICON_FULLNAMES.eye : _const_const__WEBPACK_IMPORTED_MODULE_0__.ICON_FULLNAMES.eyeClosed;\n        return window.location.origin + _const_const__WEBPACK_IMPORTED_MODULE_0__.FOLDERS.icons.any + iconName;\n    }\n    constructor(accessModeImgElSelector, isAccessModeBaseValue = false) {\n        this.accessModeImgEl = (0,_helpers_elements__WEBPACK_IMPORTED_MODULE_1__.getElementFromDocument)(accessModeImgElSelector);\n        this.isAccessModeBaseValue = isAccessModeBaseValue;\n        this.currentIsAccessMode = sessionStorage.getItem(_const_const__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.session.isAccessMode) === \"true\" || isAccessModeBaseValue;\n        this.accessModeImgEl.src = this.currentIconPath;\n    }\n    toggleAccessMode = () => {\n        this.currentIsAccessMode = !this.currentIsAccessMode;\n        this.accessModeImgEl.classList.add(\"access-mode-button-icon--fade-out\");\n        this.accessModeImgEl.addEventListener(\"transitionend\", () => {\n            this.accessModeImgEl.src = this.currentIconPath;\n            this.accessModeImgEl.classList.remove(\"access-mode-button-icon--fade-out\");\n        }, { once: true });\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccessModeWorker);\n\n\n//# sourceURL=webpack://fok-cv/./src/scripts/ts/service/AccessModeWorker.ts?");

/***/ }),

/***/ "./src/scripts/ts/service/App.ts":
/*!***************************************!*\
  !*** ./src/scripts/ts/service/App.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ComponentFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComponentFactory */ \"./src/scripts/ts/service/ComponentFactory.ts\");\n/* harmony import */ var _Translator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Translator */ \"./src/scripts/ts/service/Translator.ts\");\n/* harmony import */ var _AccessModeWorker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccessModeWorker */ \"./src/scripts/ts/service/AccessModeWorker.ts\");\n/* harmony import */ var _ImageModalViewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImageModalViewer */ \"./src/scripts/ts/service/ImageModalViewer.ts\");\n/* harmony import */ var _PageChanger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PageChanger */ \"./src/scripts/ts/service/PageChanger.ts\");\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../const/const */ \"./src/scripts/ts/const/const.ts\");\n/* harmony import */ var _functions_sendMessageToEmail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functions/sendMessageToEmail */ \"./src/scripts/ts/service/functions/sendMessageToEmail.ts\");\n\n\n\n\n\n\n\nclass App {\n    static startPageName = _const_const__WEBPACK_IMPORTED_MODULE_5__.PAGE_NAME_ENUM.home;\n    static baseLanguage = _const_const__WEBPACK_IMPORTED_MODULE_5__.LANGUAGE_ENUM.EN;\n    static isAccessModeBaseValue = false;\n    static async startAsync(config) {\n        const componentFactory = new _ComponentFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"](config.componentElSelector);\n        await componentFactory.initAsync();\n        const translator = new _Translator__WEBPACK_IMPORTED_MODULE_1__[\"default\"](config.languageSelectElSelector, App.baseLanguage);\n        const accessModeWorker = new _AccessModeWorker__WEBPACK_IMPORTED_MODULE_2__[\"default\"](config.accessModeImgElSelector, App.isAccessModeBaseValue);\n        const imageModalViewer = new _ImageModalViewer__WEBPACK_IMPORTED_MODULE_3__[\"default\"](config.imageModalElSelector, config.imageModalContentElSelector, config.overlayElSelector);\n        const pageChanger = new _PageChanger__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n            componentFactory: componentFactory,\n            translator: translator,\n            imageModalViewer: imageModalViewer,\n            basePageName: App.startPageName\n        });\n        window.changePageByLink = pageChanger.changePageByLink.bind(pageChanger);\n        window.sendMessageToEmail = _functions_sendMessageToEmail__WEBPACK_IMPORTED_MODULE_6__[\"default\"];\n        window.toggleAccessMode = accessModeWorker.toggleAccessMode;\n        window.changeLanguage = translator.changeLanguage;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n\n//# sourceURL=webpack://fok-cv/./src/scripts/ts/service/App.ts?");

/***/ }),

/***/ "./src/scripts/ts/service/ComponentFactory.ts":
/*!****************************************************!*\
  !*** ./src/scripts/ts/service/ComponentFactory.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const/const */ \"./src/scripts/ts/const/const.ts\");\n/* harmony import */ var _helpers_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/elements */ \"./src/scripts/ts/helpers/elements.ts\");\n\n\nclass ComponentFactory {\n    container;\n    root = document.createElement(\"div\");\n    components;\n    constructor(containerElSelector) {\n        this.container = (0,_helpers_elements__WEBPACK_IMPORTED_MODULE_1__.getElementFromDocument)(containerElSelector);\n    }\n    async initAsync() {\n        this.components = {\n            header: ComponentFactory.getComponentFromLayout(await ComponentFactory.getLayoutFromFileAsync(`${_const_const__WEBPACK_IMPORTED_MODULE_0__.FOLDERS.components.index}${_const_const__WEBPACK_IMPORTED_MODULE_0__.COMPONENT_NAMES.header}.html`)),\n            pageList: await Promise.all(Object.values(_const_const__WEBPACK_IMPORTED_MODULE_0__.COMPONENT_NAMES.pages).map(async (pageName) => {\n                return {\n                    [`${pageName}`]: ComponentFactory.getComponentFromLayout(await ComponentFactory.getLayoutFromFileAsync(`${_const_const__WEBPACK_IMPORTED_MODULE_0__.FOLDERS.components.pages}${pageName}.html`))\n                };\n            })).then(results => Object.assign({}, ...results)),\n            footer: ComponentFactory.getComponentFromLayout(await ComponentFactory.getLayoutFromFileAsync(`${_const_const__WEBPACK_IMPORTED_MODULE_0__.FOLDERS.components.index}${_const_const__WEBPACK_IMPORTED_MODULE_0__.COMPONENT_NAMES.footer}.html`)),\n            overlay: ComponentFactory.getComponentFromLayout(await ComponentFactory.getLayoutFromFileAsync(`${_const_const__WEBPACK_IMPORTED_MODULE_0__.FOLDERS.components.index}${_const_const__WEBPACK_IMPORTED_MODULE_0__.COMPONENT_NAMES.overlay}.html`)),\n            imgModal: ComponentFactory.getComponentFromLayout(await ComponentFactory.getLayoutFromFileAsync(`${_const_const__WEBPACK_IMPORTED_MODULE_0__.FOLDERS.components.index}${_const_const__WEBPACK_IMPORTED_MODULE_0__.COMPONENT_NAMES.imgModal}.html`)),\n        };\n        this.root.classList.add(\"root\");\n        this.setComponentsToContainer(this.components.header, this.root, this.components.footer, this.components.overlay, this.components.imgModal);\n    }\n    static async getLayoutFromFileAsync(pathToFile) {\n        try {\n            const resp = await fetch(pathToFile);\n            if (!resp.ok) {\n                throw new Error(\"Network drop: \" + resp.statusText);\n            }\n            const layout = await resp.text();\n            return layout;\n        }\n        catch (err) {\n            console.error(\"Initial layout failed: \", err);\n            throw err;\n        }\n    }\n    static getComponentFromLayout(layout) {\n        const tempDiv = document.createElement(\"div\");\n        tempDiv.innerHTML = layout;\n        return tempDiv.firstElementChild;\n    }\n    setComponentsToContainer(...components) {\n        components.forEach(component => {\n            this.container.appendChild(component);\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentFactory);\n\n\n//# sourceURL=webpack://fok-cv/./src/scripts/ts/service/ComponentFactory.ts?");

/***/ }),

/***/ "./src/scripts/ts/service/ImageModalViewer.ts":
/*!****************************************************!*\
  !*** ./src/scripts/ts/service/ImageModalViewer.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/elements */ \"./src/scripts/ts/helpers/elements.ts\");\n\nclass ImageModalViewer {\n    imageModal;\n    imageModalContent;\n    overlay;\n    constructor(imageModalElSelector, imageModalContentElSelector, overlayElSelector) {\n        this.imageModal = (0,_helpers_elements__WEBPACK_IMPORTED_MODULE_0__.getElementFromDocument)(imageModalElSelector);\n        this.imageModalContent = (0,_helpers_elements__WEBPACK_IMPORTED_MODULE_0__.getElementFromDocument)(imageModalContentElSelector);\n        this.overlay = (0,_helpers_elements__WEBPACK_IMPORTED_MODULE_0__.getElementFromDocument)(overlayElSelector);\n    }\n    setImageModalEvents() {\n        document\n            .querySelectorAll(\"#photo\")\n            .forEach(el => {\n            const image = (0,_helpers_elements__WEBPACK_IMPORTED_MODULE_0__.convertElement)(el);\n            image.style.cursor = \"pointer\";\n            image.addEventListener(\"click\", (event) => {\n                this.openImageModalByImage((0,_helpers_elements__WEBPACK_IMPORTED_MODULE_0__.convertElement)(event.currentTarget));\n            });\n        });\n    }\n    openImageModalByImage(image) {\n        this.imageModal.style.display = \"flex\";\n        this.imageModalContent.src = image.src;\n        this.overlay.style.display = \"block\";\n        this.overlay.addEventListener(\"click\", () => {\n            this.closeImageModal();\n        });\n    }\n    closeImageModal() {\n        this.imageModal.style.display = \"none\";\n        this.imageModalContent.src = \"\";\n        this.overlay.style.display = \"none\";\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageModalViewer);\n\n\n//# sourceURL=webpack://fok-cv/./src/scripts/ts/service/ImageModalViewer.ts?");

/***/ }),

/***/ "./src/scripts/ts/service/PageChanger.ts":
/*!***********************************************!*\
  !*** ./src/scripts/ts/service/PageChanger.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const/const */ \"./src/scripts/ts/const/const.ts\");\n/* harmony import */ var _helpers_convertToEnum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/convertToEnum */ \"./src/scripts/ts/helpers/convertToEnum.ts\");\n/* harmony import */ var _helpers_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/elements */ \"./src/scripts/ts/helpers/elements.ts\");\n\n\n\nclass PageChanger {\n    componentFactory;\n    translator;\n    imageModalViewer;\n    basePageName;\n    burgerCheckbox;\n    _currentPage;\n    get currentPage() {\n        return this._currentPage;\n    }\n    set currentPage(pageName) {\n        this._currentPage = pageName;\n        sessionStorage.setItem(_const_const__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.session.currentPage, pageName);\n    }\n    constructor(props) {\n        this.componentFactory = props.componentFactory;\n        this.translator = props.translator;\n        this.imageModalViewer = props.imageModalViewer;\n        this.basePageName = props.basePageName;\n        this._currentPage = this.basePageName;\n        this.currentPage = (0,_helpers_convertToEnum__WEBPACK_IMPORTED_MODULE_1__.convertStringToPageNameEnum)(sessionStorage.getItem(_const_const__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.session.currentPage) || props.basePageName);\n        this.burgerCheckbox = (0,_helpers_elements__WEBPACK_IMPORTED_MODULE_2__.getElementFromDocument)(\"#viewBurgerNavCheckbox\");\n        this.changePageByLink(this.currentPage);\n        this.burgerCheckbox.addEventListener(\"click\", (el) => {\n            const isViewBurger = (0,_helpers_elements__WEBPACK_IMPORTED_MODULE_2__.convertElement)(el.currentTarget).checked;\n            if (isViewBurger) {\n                this.componentFactory.root.style.visibility = \"hidden\";\n                this.componentFactory.root.style.opacity = \"0\";\n            }\n            else {\n                this.componentFactory.root.style.visibility = \"visible\";\n                this.componentFactory.root.style.opacity = \"1\";\n            }\n        });\n    }\n    changePageByLink(pageNameToSelect) {\n        const root = this.componentFactory.root;\n        this.currentPage = (0,_helpers_convertToEnum__WEBPACK_IMPORTED_MODULE_1__.convertStringToPageNameEnum)(pageNameToSelect);\n        this.burgerCheckbox.checked = false;\n        root.style.visibility = \"visible\";\n        root.style.opacity = \"1\";\n        this.setPageByCurrentPage();\n        if (pageNameToSelect == _const_const__WEBPACK_IMPORTED_MODULE_0__.PAGE_NAME_ENUM.exp) {\n            // new Chart(getElementFromDocument<HTMLCanvasElement>(\"#it-language-chart\"), ChartConfigs.itLanguage);\n            // new Chart(getElementFromDocument<HTMLCanvasElement>(\"lib-fw-chart\"), ChartConfigs.libraryAndFramework);\n            // new Chart(getElementFromDocument<HTMLCanvasElement>(\"commit-freq-chart\"), ChartConfigs.commitFrequency);\n        }\n        this.showSelectedLinkByCurrentPage();\n        this.transformLogoByCurrentPage();\n        this.translator.translateSiteByCurrentLanguage();\n        this.imageModalViewer.setImageModalEvents();\n    }\n    setPageByCurrentPage() {\n        const components = this.componentFactory.components;\n        if (components) {\n            const currentPage = this._currentPage;\n            this.componentFactory.root.innerHTML = components.pageList[currentPage].outerHTML;\n            document.title = \"fok ∙ \" + currentPage;\n        }\n    }\n    showSelectedLinkByCurrentPage() {\n        const currentPage = this._currentPage;\n        this.componentFactory.container\n            .querySelectorAll(\".header__nav\")\n            .forEach(navEl => {\n            navEl.querySelectorAll(\".header__nav-link\")\n                .forEach(linkEl => {\n                if (linkEl.id.includes(currentPage))\n                    linkEl.classList.add(\"header__nav-link--selected\");\n                else\n                    linkEl.classList.remove(\"header__nav-link--selected\");\n            });\n        });\n    }\n    transformLogoByCurrentPage() {\n        const currentPage = this._currentPage;\n        const logoLinkEl = (0,_helpers_elements__WEBPACK_IMPORTED_MODULE_2__.convertElement)(this.componentFactory.container.querySelector(\".logo-link\"));\n        if (currentPage === _const_const__WEBPACK_IMPORTED_MODULE_0__.PAGE_NAME_ENUM.home) {\n            logoLinkEl.classList.add(\"logo-link--big\");\n        }\n        else {\n            logoLinkEl.classList.remove(\"logo-link--big\");\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageChanger);\n\n\n//# sourceURL=webpack://fok-cv/./src/scripts/ts/service/PageChanger.ts?");

/***/ }),

/***/ "./src/scripts/ts/service/Translator.ts":
/*!**********************************************!*\
  !*** ./src/scripts/ts/service/Translator.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const/const */ \"./src/scripts/ts/const/const.ts\");\n/* harmony import */ var _helpers_convertToEnum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/convertToEnum */ \"./src/scripts/ts/helpers/convertToEnum.ts\");\n/* harmony import */ var _helpers_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/elements */ \"./src/scripts/ts/helpers/elements.ts\");\n/* harmony import */ var _const_translation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const/translation */ \"./src/scripts/ts/const/translation.ts\");\n\n\n\n\nclass Translator {\n    languageSelectEl;\n    baseLanguage = _const_const__WEBPACK_IMPORTED_MODULE_0__.LANGUAGE_ENUM.EN;\n    _currentLanguage = this.baseLanguage;\n    get currentLanguage() {\n        return this._currentLanguage;\n    }\n    set currentLanguage(language) {\n        this._currentLanguage = language;\n        localStorage.setItem(_const_const__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.local.currentLanguage, language);\n    }\n    constructor(languageSelectElSelector, baseLanguage) {\n        this.languageSelectEl = (0,_helpers_elements__WEBPACK_IMPORTED_MODULE_2__.getElementFromDocument)(languageSelectElSelector);\n        this.baseLanguage = baseLanguage;\n        this._currentLanguage =\n            (0,_helpers_convertToEnum__WEBPACK_IMPORTED_MODULE_1__.convertStringToLanguageEnum)(localStorage.getItem(_const_const__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.local.currentLanguage) || baseLanguage);\n        this.languageSelectEl.value = this._currentLanguage;\n    }\n    changeLanguage = () => {\n        const selectedLanguage = (0,_helpers_convertToEnum__WEBPACK_IMPORTED_MODULE_1__.convertStringToLanguageEnum)(this.languageSelectEl.options[this.languageSelectEl.selectedIndex].text);\n        document.documentElement.setAttribute(\"lang\", selectedLanguage);\n        this._currentLanguage = selectedLanguage;\n        this.translateSiteByCurrentLanguage();\n    };\n    translateSiteByCurrentLanguage = () => {\n        document\n            .querySelectorAll(\"[translate-key]\")\n            .forEach(el => {\n            const translateKey = el.getAttribute(\"translate-key\");\n            const oldInnerHtml = el.innerHTML;\n            el.innerHTML = _const_translation__WEBPACK_IMPORTED_MODULE_3__[\"default\"][this._currentLanguage].innerHtml[translateKey] || oldInnerHtml;\n        });\n        document\n            .querySelectorAll(\"[translate-title-key]\")\n            .forEach(el => {\n            const htmlEl = (0,_helpers_elements__WEBPACK_IMPORTED_MODULE_2__.convertElement)(el);\n            const translateTitleKey = htmlEl.getAttribute(\"translate-title-key\");\n            const oldTitle = htmlEl.title;\n            htmlEl.title = _const_translation__WEBPACK_IMPORTED_MODULE_3__[\"default\"][this._currentLanguage].title[translateTitleKey] || oldTitle;\n        });\n        document\n            .querySelectorAll(\"[translate-alt-key]\")\n            .forEach(el => {\n            const imgEl = (0,_helpers_elements__WEBPACK_IMPORTED_MODULE_2__.convertElement)(el);\n            const translateAltKey = imgEl.getAttribute(\"translate-alt-key\");\n            const oldAlt = imgEl.alt;\n            imgEl.alt = _const_translation__WEBPACK_IMPORTED_MODULE_3__[\"default\"][this._currentLanguage].imageAlt[translateAltKey] || oldAlt;\n        });\n        document\n            .querySelectorAll(\"[translate-chart-title-key]\")\n            .forEach(el => {\n            const translateChartTitleKey = el.getAttribute(\"translate-chart-title-key\");\n            const oldChartTitle = el.innerHTML;\n            el.innerHTML = _const_translation__WEBPACK_IMPORTED_MODULE_3__[\"default\"][this._currentLanguage].chartTitle[translateChartTitleKey] || oldChartTitle;\n        });\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Translator);\n\n\n//# sourceURL=webpack://fok-cv/./src/scripts/ts/service/Translator.ts?");

/***/ }),

/***/ "./src/scripts/ts/service/functions/sendMessageToEmail.ts":
/*!****************************************************************!*\
  !*** ./src/scripts/ts/service/functions/sendMessageToEmail.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/elements */ \"./src/scripts/ts/helpers/elements.ts\");\n\nconst sendMessageToEmail = () => {\n    const writeMessageBlockImg = (0,_helpers_elements__WEBPACK_IMPORTED_MODULE_0__.getElementFromDocument)(\".contact__write-message-block-image\");\n    writeMessageBlockImg.classList.add(\"element-rotate\");\n    (0,_helpers_elements__WEBPACK_IMPORTED_MODULE_0__.getElementListFromDocument)(\".contact__write-message-block-form-item-text-box\")\n        .forEach(textBox => {\n        textBox.value = \"\";\n    });\n    (0,_helpers_elements__WEBPACK_IMPORTED_MODULE_0__.getElementFromDocument)(\".contact__write-message-block-form-item-text-box-area\").value = \"\";\n    setTimeout(() => {\n        writeMessageBlockImg.classList.remove(\"element-rotate\");\n    }, 1000);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendMessageToEmail);\n\n\n//# sourceURL=webpack://fok-cv/./src/scripts/ts/service/functions/sendMessageToEmail.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/ts/index.ts");
/******/ 	
/******/ })()
;