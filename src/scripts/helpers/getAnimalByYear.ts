function getAnimalByYear(year: any): string {
    const animals = [
        "🐀",
        "🐃",
        "🐅",
        "🐇",
        "🐉",
        "🐍",
        "🐎",
        "🐐",
        "🐒",
        "🐓",
        "🐕",
        "🐖"
    ];

    const index = (year - 4) % 12; // 4 - это год Крысы (1924), который считается началом цикла
    return animals[index];
}

export default getAnimalByYear;