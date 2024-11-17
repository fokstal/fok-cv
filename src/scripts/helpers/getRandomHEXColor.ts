import { colorsHEX } from "@scripts/const/colors";

const currentIndexList: number[] = [];

const getRandomHEXColor = (): string => {
    let index = Math.floor(Math.random() * colorsHEX.length);

    while (currentIndexList.includes(index))
        index = Math.floor(Math.random() * colorsHEX.length);

    currentIndexList.push(index);

    return colorsHEX[index];
}

export default getRandomHEXColor;