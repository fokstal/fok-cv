const takeRGBA = (r = -1, g = -1, b = -1, a = -1) => {
    if (r == -1)
        r = Math.random() * 255 + 1;
    if (g == -1)
        g = Math.random() * 255 + 1;
    if (b == -1)
        b = Math.random() * 255 + 1;
    if (a == -1)
        a = Math.random() * 1 + 0.1;
    return {
        r: r,
        g: g,
        b: b,
        a: a
    };
};
export default takeRGBA;
