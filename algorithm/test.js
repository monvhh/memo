const getDepth = obj => {
    if (typeof (obj) !== 'object') {
        return 0;
    }
    const keys = Object.keys(obj)
    if (keys.length == 0) {
        return 1;
    }
    const lens = keys.map(k => getDepth(obj[k]));
    const maxLens = Math.max(...lens);
    return 1 + maxLens;
}