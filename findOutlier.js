function findOulier(arry) {
    let evens = []
    let odds = []

    for (let i = 0; i < arry.length; i++) {
        if (arry[i] % 2 === 0) {
            evens.push(arry[i])
        } else {
            odds.push(arry[i])
        }
    }

    if (evens.length > odds.length) {
        console.log(odds[0])
        return odds[0]
    } else {
        console.log(evens[0])
        return evens[0]
    }
}

findOulier([2, 4, 0, 100, 4, 11, 2602, 36])
findOulier([160, 3, 1719, 19, 11, 13, -21])