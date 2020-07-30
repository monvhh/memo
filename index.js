const arr = [
    ['*', '*', '*', '*', '*'],
    ['*', '', '*', '', ''],
    ['*', '*', '', '', '*'],
    ['*', '*', '', '', '*'],
    ['*', '', '', '', '*'],
    ['*', '*', '*', '*', '*']
]
const arr_2 = [
    ['*', '*', '*', '*', '*'],
    ['*', '', '*', '', ''],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '', '', '*'],
    ['*', '', '', '', '*'],
    ['*', '*', '*', '*', '*']
]
const arr_3 = [
    ['*', '*', '*', '*', '*'],
    ['*', '', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '', '', '*'],
    ['*', '', '', '', '*'],
    ['*', '*', '*', '*', '*']
]
const arr_4 = [
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '', '', '*'],
    ['*', '', '', '', '*'],
    ['*', '*', '*', '*', '*']
]
const arr_5 = [
    ['*', '*', '*', '*', '*'],
    ['*', '', '', '', ''],
    ['*', '*', '', '', '*'],
    ['*', '*', '*', '', '*'],
    ['*', '', '', '', '*'],
    ['*', '*', '*', '*', '*']
]
const arr_6 = [
    ['', '*', '*', '*', '*'],
    ['', '', '', '', ''],
    ['', '*', '', '', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '', '', '', '*'],
    ['*', '*', '*', '*', '']
]
const testTop = ({ i, j }, flags) => {
    const top = i > 0 ? flags[i - 1][j] : {
        space: false,
        count: false
    }
    // if (top.space) {
    //     const ttop = testTop({ i, j: j - 1 }, flags)
    //     top.continue = ttop.space
    //     top.continueCount = ttop.count || !!ttop.continueCount
    // }
    if (top.space && flags[i][j].space) {
        // const lleft = testLeft({ i, j: j - 1 }, flags)
        // left.continue = lleft.space
        // left.continueCount = lleft.count || !!lleft.continueCount
        top.continueCount = !!top.continueCount || top.count
        flags[i][j].continueCount = flags[i][j].continueCount || top.continueCount
    }
    return top
}
const testLeft = ({ i, j }, flags) => {
    const left = j > 0 ? flags[i][j - 1] : {
        space: false,
        count: false
    }
    if (left.space && flags[i][j].space) {
        // const lleft = testLeft({ i, j: j - 1 }, flags)
        // left.continue = lleft.space
        // left.continueCount = lleft.count || !!lleft.continueCount
        left.continueCount = !!left.continueCount || left.count
        flags[i][j].continueCount = flags[i][j].continueCount || left.continueCount
    }
    return left
}
const testNeighbor = ({ i, j }, flags) => {
    let top = testTop({ i, j }, flags)
    let left = testLeft({ i, j }, flags)

    const remove = (top.space && left.space && top.continueCount && left.continueCount);
    if (remove) {
        flags[i][j].continueCount = false
        flags[i][j].continueCount = false
    }
    return {
        remove,
        has: top.space || left.space
    }
}
const countSpace = (arr) => {
    const m = arr.length
    const n = arr[0].length
    const flags = Array(m)
    let total = 0
    for (i = 0; i < m; i++) {
        flags[i] = Array(n)
        for (j = 0; j < n; j++) {
            flags[i][j] = {
                space: false,
                count: false
            }
            if (arr[i][j] !== '*') {
                flags[i][j].space = true;
                const neighbor = testNeighbor({ i, j }, flags)
                if (neighbor.remove) {
                    total--
                } else if (!neighbor.has) {
                    total++
                    flags[i][j].count = true
                }
                console.log(i, j, total)
            }
        }
    }
    console.log(total,flags[2][2],flags[1][3])
}

// countSpace(arr)//2
// countSpace(arr_2)//3
// countSpace(arr_3)//2
// countSpace(arr_4)//1
// countSpace(arr_5)//1
countSpace(arr_6)//3