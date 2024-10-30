import TranslationModel from "../models/TranslationModel";

const translation: TranslationModel = {
    BY: {
        // і
        // ў

        innerHtml: {
            // home page
            helloText: `
        Прывітанне!<br>
        Мяне клічуць <strong>Кірыл</strong><br>
        і я <strong>.NET разработчык!</strong><br>
    `,

            // exp page
            exp: "вопыт",
            workListTitle: "Вопыт працы",
            ngaekTitle: `
        Установа адукацыі
        <br>
        "Навапольскі дзяржаўны аграрна-эканамічны каледж"
    `,
            ngaekPosition: "Тэхнік-праграміст",
            ngaekExpMarkedList: `
        <li>канфігураваў лакальную сетку</li>
        <li>раманціраваў і ўсталёўваў камп'ютары</li>
        <li>падтрымліваў базу даных студэнтаў</li>
        <li>суправаджаў відэаканферэнцыі</li>
        <li>распрацоўваў міні-прыкладанні</li>
        <li>выкладаў практыку аператара ЭВМ</li>
    `,
            courseListTitle: "Курсы",
            udemyTitle: "Udemy.com",
            udemyCourseName: "ASP.NET Core MVC. Частка 1",
            skillsTitle: "Навыкі",
            andAlsoText: "а таксама...",

            // about page
            about: "пра мяне",
            startTitle: "Мяне завуць Кірыл Лабуць, прывітанне!",
            startText: "Lorem іpsum dolor sіt amet",
            educationTitle: "Адукацыя",
            educationText: "Lorem іpsum dolor sіt amet",
            hobbyTitle: "Заняткі",
            hobbySoccer: "я гуляю ў футбол",
            hobbyBasketball: "таксама ў баскетбол",
            hobbyAnyBall: "ў любыя гульні з мячом...",
            hobbyLoveSport: "Я люблю спорт!",
            hobbyAny: "Актыўна чытаю кнігі і смачна гатую",
            hobbyMe: "гэта я",

            // contact page
            contact: "кантакты",
            writeMe: "Напісаць мне",
            nameForm: "імя",
            emailForm: "электронная пошта",
            messageForm: "паведамленне",
            btnForm: "адправіць",
            moreLinks: "больш спасылак",
        },

        title: {
            shareLink: "Падзяліцца спасылкай на старонку",
            changeLanguage: "Змяніць мову",
            accessMode: "Версія для людзей са слабым зрокам",
        },

        imageAlt: {
            udemyCertificate: "Сертыфікат па ASP.NET Core MVC. Частка 1",
            myAvatar: "Мой аватар",
            collegePhoto: "Фота каледжа",
            meAndFootballTeam: "Фота са мной і маёй футбольнай камандай",
            meAndFiendInPingPong: "Фотаздымак мяне і майго сябра, якія гуляюць у настольны тэніс",
            meAndMyGirlfriend: "Фота са мной і маёй дзяўчынай",
            pigeonImg: "Малюнак з галубамі",
        },

        chartTitle: {
            itLanguage: "Веды моў праграмавання",
            libAndFw: "Веды бібліятэк і фрэймворкаў",
            commitFreq: "Частата камітаў на GitHub",
        }
    },


    RU: {
        innerHtml: {
            // home page
            helloText: `
        Доброго дня!<br>
        Меня зовут <strong>Кирилл</strong><br>
        и я <strong>.NET Разработчик!</strong><br>
    `,

            // exp page
            exp: "опыт",
            workListTitle: "Опыт работы",
            ngaekTitle: `
        Учреждение образования
        <br>
        "Новопольский государственный аграрно-экономический колледж"
    `,
            ngaekPosition: "Техник-программист",
            ngaekExpMarkedList: `
        <li>конфигурировал локальную сеть</li>
        <li>ремонтировал и устанавливал компьютеры</li>
        <li>поддерживал базу данных студентов</li>
        <li>сопровождал видеоконференции</li>
        <li>разрабатывал мини-приложения</li>
        <li>преподавал практику оператора ЭВМ</li>
    `,
            courseListTitle: "Курсы",
            udemyTitle: "Udemy.com",
            udemyCourseName: "ASP.NET Core MVC. Часть 1",
            skillsTitle: "Навыки",
            andAlsoText: "а также...",

            // about page
            about: "обо мне",
            startTitle: "Меня зовут Кирилл Лабуть, привет!",
            startText: "Lorem ipsum dolor sit amet",
            educationTitle: "Образование",
            educationText: "Lorem ipsum dolor sit amet",
            hobbyTitle: "Хобби",
            hobbySoccer: "я играю в футбол",
            hobbyBasketball: "и в баскетбол",
            hobbyAnyBall: "в любые игры с мячом...",
            hobbyLoveSport: "Я люблю спорт!",
            hobbyAny: "Активно читаю книги и вкусно готовлю",
            hobbyMe: "это я",

            // contact page
            contact: "контакты",
            writeMe: "Написать мне",
            nameForm: "имя",
            emailForm: "электронная почта",
            messageForm: "сообщение",
            btnForm: "отправить",
            moreLinks: "больше ссылок",
        },

        title: {
            shareLink: "Поделиться ссылкой на страницу",
            changeLanguage: "Изменить язык",
            accessMode: "Версия для слабовидящих",
        },

        imageAlt: {
            udemyCertificate: "Сертификат по ASP.NET Core MVC. Часть 1",
            myAvatar: "Мой аватар",
            collegePhoto: "Фото колледжа",
            meAndFootballTeam: "Фото со мной и моей футбольной командой",
            meAndFiendInPingPong: "Фото меня и моего друга на теннисе",
            meAndMyGirlfriend: "Фото меня и моей девушки",
            pigeonImg: "Рисунок с голубями",
        },

        chartTitle: {
            itLanguage: "Знание языков программирования",
            libAndFw: "Знание библиотек и фреймворков",
            commitFreq: "Частота коммитов на GitHub",
        }
    },


    EN: {
        innerHtml: {
            helloText: `
            Hello world!<br>
            My name is <strong>Kirill</strong><br>
            and I am a <strong>.NET Developer!</strong><br>
        `,

            // exp page
            exp: "exp",
            workListTitle: "Works",
            ngaekTitle: `
            Educational institution
            <br>
            "Novopolsky Agricultural and Economic College"
        `,
            ngaekPosition: "Сomputer technician",
            ngaekExpMarkedList: `
            <li>configured the local network</li>
            <li>repaired and assembled PCs</li>
            <li>supported the database of students</li>
            <li>video conference</li>
            <li>developed mini-applications</li>
            <li>taught computer operator practice</li>
        `,
            courseListTitle: "Courses",
            udemyTitle: "Udemy.com",
            udemyCourseName: "ASP.NET Core MVC. Part 1",
            skillsTitle: "Skills",
            andAlsoText: "and also...",

            // about page
            about: "about",
            startTitle: "I`am Kirill Labut, hi!",
            startText: "Lorem ipsum dolor sit amet",
            educationTitle: "Education",
            educationText: "Lorem ipsum dolor sit amet",
            hobbyTitle: "Hobby",
            hobbySoccer: "i play in soccer",
            hobbyBasketball: "and basketball",
            hobbyAnyBall: "any ball game...",
            hobbyLoveSport: "i love the <strong>sport!</strong>",
            hobbyAny: "I am actively trying to make books and cook delicious",
            hobbyMe: "it`s me",

            // contact page
            contact: "contact",
            writeMe: "Write me",
            nameForm: "name",
            emailForm: "email",
            messageForm: "message",
            btnForm: "send",
            moreLinks: "take more links",
        },

        title: {
            shareLink: "Share link on site",
            changeLanguage: "Change language",
            accessMode: "Accessibility mode toggle",
        },

        imageAlt: {
            udemyCertificate: "Certificate by ASP.NET Core MVC. Part 1",
            myAvatar: "My avatar",
            collegePhoto: "College photo",
            meAndFootballTeam: "Photo with me and my football team",
            meAndFiendInPingPong: "Photo of me and my friend playing ping-pong",
            meAndMyGirlfriend: "Photo with me and my girlfriend",
            pigeonImg: "Image with pigeons",
        },

        chartTitle: {
            itLanguage: "IT Languages skill",
            libAndFw: "Libraries and frameworks skill",
            commitFreq: "Commit frequency on GitHub",
        }
    }
}

export default translation;