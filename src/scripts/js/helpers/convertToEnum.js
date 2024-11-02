import { LANGUAGE_ENUM, PAGE_NAME_ENUM } from "../const/const.js";
const convertStringToLanguageEnum = (line) => {
    if (line in LANGUAGE_ENUM)
        return LANGUAGE_ENUM[line];
    throw new Error("This LANGUAGE is not supported!");
};
const convertStringToPageNameEnum = (line) => {
    if (line in PAGE_NAME_ENUM)
        return PAGE_NAME_ENUM[line];
    throw new Error("This PAGE_NAME is not supported!");
};
export { convertStringToLanguageEnum, convertStringToPageNameEnum };
