import { LANGUAGE_ENUM } from "@scripts/const/const";

type TranslationModel = {
    [key in LANGUAGE_ENUM]: {
        innerHtml: TranslationModel_InnerHtml,
        title: TranslationModel_Title,
        imageAlt: TranslationModel_ImageAlt,
        chartTitle: TranslationModel_ChartTitle,
        contactFormErrorMessage: TranslationModel_ContactFormErrorMessage,
        notification: TranslationModel_Notification,
    }
}

// InnerHtml

type TranslationModel_InnerHtml = {
    // home page
    helloText: string,

    // exp page
    exp: string,
    workListTitle: string,
    ngaekTitle: string,
    ngaekPosition: string,
    ngaekExpMarkedList: string,
    tecTitle: string,
    tecPosition: string,
    tecExpMarkedList: string,
    courseListTitle: string,
    udemyTitle: string,
    udemyCourseName: string,
    skillsTitle: string,
    technologyTitle: string,

    // about page
    about: string,
    startTitle: string,
    startText: string,
    educationTitle: string,
    educationText1: string,
    educationText2: string,
    hobbyTitle: string,
    hobbySoccer: string,
    hobbyBasketball: string,
    hobbyAnyBall: string,
    hobbyLoveSport: string,
    hobbyAny: string,
    hobbyMe: string,

    // contact page
    contact: string,
    writeMe: string,
    nameForm: string,
    emailForm: string,
    messageForm: string,
    btnForm: string,
    moreLinks: string,    
};



// Title

type TranslationModel_Title = {
    shareLink: string,
    changeLanguage: string,
    accessMode: string,
}



// ImageAlt

type TranslationModel_ImageAlt = {
    udemyCertificate: string,
    myAvatar: string,
    collegePhoto: string,
    meAndFootballTeam: string,
    meAndFiendInPingPong: string,
    meAndBelaz: string,
    pigeonImg: string,
}



// ChartTitle

type TranslationModel_ChartTitle = {
    itLanguage: string,
    itLanguageFreq: string,
    libAndFw: string,
    commitFreq: string,
}



// ErrorMessage

type TranslationModel_ContactFormErrorMessage = {
    nameFieldLength: string,
    emailFieldFormat: string,
    messageFieldLength: string,
}



// Notification

type TranslationModel_Notification = {
    successEmailSend: string,
    failedEmailSend: string,
}

export default TranslationModel;
export { 
    TranslationModel_InnerHtml, 
    TranslationModel_Title, 
    TranslationModel_ImageAlt, 
    TranslationModel_ChartTitle, 
    TranslationModel_ContactFormErrorMessage,
    TranslationModel_Notification,
};