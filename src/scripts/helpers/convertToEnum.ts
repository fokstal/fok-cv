import { LANGUAGE_ENUM, PAGE_NAME_ENUM } from "@scripts/const/const";

const convertStringToLanguageEnum = (line: string): LANGUAGE_ENUM => {
    if (line in LANGUAGE_ENUM)
        return LANGUAGE_ENUM[line as keyof typeof LANGUAGE_ENUM];

    throw new Error("This LANGUAGE is not supported!");
}

const convertStringToPageNameEnum = (line: string): PAGE_NAME_ENUM => {
    if (line in PAGE_NAME_ENUM)
        return PAGE_NAME_ENUM[line as keyof typeof PAGE_NAME_ENUM];

    throw new Error("This PAGE_NAME is not supported!");
}

export { convertStringToLanguageEnum, convertStringToPageNameEnum };