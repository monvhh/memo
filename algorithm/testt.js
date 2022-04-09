function addg(num) {
    let sum = 0
    const f = function (val) {
        if (val == undefined) {
            if (sum == 0) {
                return;
            }
            return sum;
        }
        sum += val
        return f
    }
    return f(num)
}