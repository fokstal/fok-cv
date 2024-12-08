function getRandomAlphanumericCharacter() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

export default getRandomAlphanumericCharacter;