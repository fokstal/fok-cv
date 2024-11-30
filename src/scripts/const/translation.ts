import TranslationModel from "@scripts/models/TranslationModel";

// «
// «

const translation: TranslationModel = {
    BY: {
        // і
        // ў

        innerHtml: {
            // home page
            helloText: `
                Прывітанне!<br>
                Мяне клічуць <strong>Кірыл</strong><br>
                і я <strong>Вэб-распрацоўшчык!</strong><br>
            `,

            // exp page
            exp: "вопыт",
            workListTitle: "Вопыт працы",
            ngaekTitle: `
                Установа адукацыі
                <br>
                «Навапольскі дзяржаўны аграрна-эканамічны каледж»
            `,
            ngaekPosition: "тэхнік-праграміст",
            ngaekExpMarkedList: `
                <li>канфігураваў лакальную сетку</li>
                <li>раманціраваў і ўсталёўваў камп'ютары</li>
                <li>падтрымліваў базу даных студэнтаў</li>
                <li>суправаджаў відэаканферэнцыі</li>
                <li>распрацоўваў міні-прыкладанні</li>
                <li>выкладаў практыку аператара ЭВМ</li>
            `,
            tecTitle: `
                РУП «Мінскэнерга» філіял «Мінская ЦЭЦ-3»
            `,
            tecPosition: "тэхнік-праграміст",
            tecExpMarkedList: `
                <li>распрацоўваў міні-інструменты</li>
                <li>канфігураваў і настрайваў ПТК</li>
                <li>рыхтаваў тэхналагічную дакументацыю</li>
            `,
            courseListTitle: "Курсы",
            udemyTitle: "Udemy.com",
            udemyCourseName: "ASP.NET Core MVC. Частка 1",
            skillsTitle: "Навыкі",
            andAlsoText: "а таксама...",

            // about page
            about: "пра мяне",
            startTitle: "Поўнае імя - Лабуць Кірыл Анатольевіч",
            startText: `
                Мне <strong>19 гадоў</strong>, і я нарадзіўся і жыву ў крутой краіне - <strong>Беларусі</strong>.
                Родам з вёскі, таму з прыродай у нас вельмі цесныя адносіны,
                ганаруся сваімі каранямі. Я ўвесь час знаходжуся ў імкненні да новых ведаў і прыгод.
                Вельмі шаную цішыню і спакой, што дапамагае атрымліваць асалоду ад кожным
                момантам жыцця.
            `,
            educationTitle: "Адукацыя",
            educationText1: `
                Упершыню наведаў я адукацыйную ўстанову ў 2011 годзе, а менавіта:
                «Станіславаўская базавая школа», дзе скончыў <strong>9 класаў</strong> з <strong>выніковым балам 8.9</strong> :3 <br>
                Затым маё навучанне працягнулася ў каледжы на аддзяленні ПОІТ
                ў УА «Навапольскі дзяржаўны аграрна-эканамічны каледж» (<a href="http://www.ngaek.by/index.php/ru/">каледж</a>).
                За час навучання, які доўжыўся <strong>4 гады</strong>, я актыўна спасцігаў свет IT
                і нават паспеў папрацаваць у якасці сістэмнага адміністратара.
            `,
            educationText2: `
                Напісаў мноства курсавых работ і міні-праектаў, а таксама ў камандзе
                з аднагрупнікам абараніў дыплом на максімальную адзнаку - <strong>10 балаў</strong>.
                У працэсе навучання я пазнаёміўся з выдатнымі людзьмі і, перш за ўсё,
                вырас як асоба, і стаў хоць невялікім,
                але ўсё ж спецыялістам і Вэб-распрацоўшчыкам.
            `,
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
            itLanguageFreq: "Асноўныя языкі праектаў на GitHub",
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
                и я <strong>Веб-разработчик!</strong><br>
            `,

            // exp page
            exp: "опыт",
            workListTitle: "Опыт работы",
            ngaekTitle: `
                Учреждение образования
                <br>
                «Новопольский государственный аграрно-экономический колледж»
            `,
            ngaekPosition: "техник-программист",
            ngaekExpMarkedList: `
                <li>конфигурировал локальную сеть</li>
                <li>ремонтировал и устанавливал компьютеры</li>
                <li>поддерживал базу данных студентов</li>
                <li>сопровождал видеоконференции</li>
                <li>разрабатывал мини-приложения</li>
                <li>преподавал практику оператора ЭВМ</li>
            `,
            tecTitle: `
                РУП «Минскэнерго» филиал «Минская ТЭЦ-3»
            `,
            tecPosition: "техник-программист",
            tecExpMarkedList: `
                <li>разрабатывал мини-инструменты</li>
                <li>конфигурировал и настраивал ПТК</li>
                <li>подготавливал технологическую документацию</li>
            `,
            courseListTitle: "Курсы",
            udemyTitle: "Udemy.com",
            udemyCourseName: "ASP.NET Core MVC. Часть 1",
            skillsTitle: "Навыки",
            andAlsoText: "а также...",

            // about page
            about: "обо мне",
            startTitle: "Полное имя - Лабуть Кирилл Анатольевич",
            startText: `
                Мне <strong>19 лет</strong>, и я родился и живу в крутой стране - <strong>Беларуси</strong>. 
                Родом из деревни, поэтому с природой у нас очень тесные отношения,
                горжусь своими корнями. Я постоянно нахожусь в стремлении к новым знаниям и приключениям. 
                Очень ценю тишину и спокойствие, что помогает наслаждаться каждым
                моментом жизни.
            `,
            educationTitle: "Образование",
            educationText1: `
                В первый раз посетил я образовательное учреждение в 2011 году, а именно:
                «Станиславовская базовая школа», где закончил <strong>9 классов</strong> с <strong>итоговым баллом 8.9</strong> :3 <br>
                Затем мое обучение продолжилось в колледже на отделении ПОИТ 
                в УО «Новопольский государственный аграрно-экономический колледж» (<a href="http://www.ngaek.by/index.php/ru/">колледж</a>). 
                За время обучения, которое длилось <strong>4 года</strong>, я активно постигал мир IT 
                и даже успел поработать в качестве системного администратора. 
            `,
            educationText2: `
                Написал множество курсовых работ и мини-проектов, а также в команде 
                с одногруппником защитил диплом на максимальную отметку - <strong>10 баллов</strong>. 
                В процессе обучения я познакомился с замечательными людьми и, прежде всего, 
                вырос как личность, ну и конечно стал хоть небольшим,
                но все же специалистом и Веб-разработчиком.
            `,
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
            itLanguageFreq: "Основные языки проектов на GitHub",
            libAndFw: "Знание библиотек и фреймворков",
            commitFreq: "Частота коммитов на GitHub",
        }
    },


    EN: {
        innerHtml: {
            helloText: `
            Hello world!<br>
            My name is <strong>Kirill</strong><br>
            and I am a <strong>Web developer!</strong><br>
        `,

            // exp page
            exp: "exp",
            workListTitle: "Works",
            ngaekTitle: `
                Educational institution
                <br>
                «Novopolsky State Agricultural and Economic College»
            `,
            ngaekPosition: "Computer technician",
            ngaekExpMarkedList: `
                <li>configured the local network</li>
                <li>repaired and assembled PCs</li>
                <li>supported the database of students</li>
                <li>video conference</li>
                <li>developed mini-applications</li>
                <li>taught computer operator practice</li>
            `,
            tecTitle: `
                ROP «Minskenergo» Branch «Minsk CHP-3»
            `,
            tecPosition: "Computer technician",
            tecExpMarkedList: `
                <li>developed mini-tools</li>
                <li>configured and configured PTC</li>
                <li>prepared the process documentation</li>
            `,
            courseListTitle: "Courses",
            udemyTitle: "Udemy.com",
            udemyCourseName: "ASP.NET Core MVC. Part 1",
            skillsTitle: "Skills",
            andAlsoText: "and also...",

            // about page
            about: "about",
            startTitle: "Full name - Labut Kirill Anatolyevich",
            startText: `
                I am <strong>19 years old</strong>, and I was born and live in a cool country - <strong>Belarus</strong>. 
                From the village, so we have a very close relationship with nature,
                Proud of my roots. I am always on the lookout for new knowledge and adventures. 
                Very much appreciate the silence and peace that helps to enjoy each
                moment of life.
            `,
            educationTitle: "Education",
            educationText1: `
                First time I visited an educational institution in 2011, namely:
                «Stanislavsky Basic School» where he finished <strong>9 classes</strong> with a <strong>final score of 8.9</strong> :3.<br>
                Then my training continued in college at the POIT department 
                in the «Novopolsky State Agricultural and Economic College» (<a href="http://www.ngaek.by/index.php/ru/">college</a>). 
                During the course, which lasted <strong>4 years</strong>, I actively explored the world of IT 
                and even worked as a system administrator. 
            `,
            educationText2: `
                Has written many coursework and mini-projects, as well as a team 
                with a classmate defended the diploma to the maximum mark - <strong>10 points</strong>. 
                During the course I met some wonderful people and, above all, 
                grew as a person, well and of course became at least a little
                but still a specialist and Web developer.
            `,
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
            itLanguageFreq: "Main IT languages of projects on GitHub",
            libAndFw: "Libraries and frameworks skill",
            commitFreq: "Commit frequency on GitHub",
        }
    }
}

export default translation;