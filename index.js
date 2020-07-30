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
        spaceIndex: 0
    }
    return top
}
const testLeft = ({ i, j }, flags) => {
    const left = j > 0 ? flags[i][j - 1] : {
        space: false,
        spaceIndex: 0
    }
    return left
}
const testNeighbor = ({ i, j }, flags) => {
    let top = testTop({ i, j }, flags)
    let left = testLeft({ i, j }, flags)

    const minIndex = min(top.spaceIndex, left.spaceIndex);
    return {
        minIndex,
        has: top.space || left.space
    }
}
const min = (a, b) => {
    if (a && b) {
        return a > b ? b : a
    }
    return a || b
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
                spaceIndex: 0
            }
            if (arr[i][j] !== '*') {
                flags[i][j].space = true;
                const neighbor = testNeighbor({ i, j }, flags)
                if (neighbor.has) {
                    flags[i][j].spaceIndex = neighbor.minIndex
                    total=flags[i][j].spaceIndex
                } else {
                    total++
                    flags[i][j].spaceIndex = total
                }
                // console.log(i, j, total)
            }
        }
    }
    console.log(total)
}

countSpace(arr)//2
countSpace(arr_2)//3
countSpace(arr_3)//2
countSpace(arr_4)//1
countSpace(arr_5)//1
countSpace(arr_6)//3