import { LANGUAGE_ENUM, PAGE_NAME_ENUM } from "@scripts/const/const";

const convertStringToLanguageEnum = (line: string): LANGUAGE_ENUM => {
    for (const key in LANGUAGE_ENUM) {
        if (LANGUAGE_ENUM[key as keyof typeof LANGUAGE_ENUM] === line) {
            return LANGUAGE_ENUM[key as keyof typeof LANGUAGE_ENUM];
        }
    }

    throw new Error(`LANGUAGE '${line}' is not supported!`);
}

const convertStringToPageNameEnum = (line: string): PAGE_NAME_ENUM => {
    if (line in PAGE_NAME_ENUM)
        return PAGE_NAME_ENUM[line as keyof typeof PAGE_NAME_ENUM];

    throw new Error(`PAGE_NAME ${line} is not supported!`);
}

export { convertStringToLanguageEnum, convertStringToPageNameEnum };