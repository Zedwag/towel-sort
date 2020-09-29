
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
    let arr = []
    matrix.forEach((row, idx) => {
        if (idx % 2) row = row.reverse()
        row.forEach(el => arr.push(el))
    })
    return arr
}
