const takeRGBA = (r = null, g = null, b = null, a = null) => {
    if (r == null)
        r = Math.random() * 255 + 1;

    if (g == null)
        g = Math.random() * 255 + 1;

    if (b == null)
        b = Math.random() * 255 + 1;

    if (a == null)
        a = Math.random() * 1 + 0.1;

    return {
        r: r,
        g: g,
        b: b,
        a: a
    }
}

export default takeRGBA;