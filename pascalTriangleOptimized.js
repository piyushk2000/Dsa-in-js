/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const matrix = []
    for (let i = 0; i < numRows; i++) {
        const matRow = []
        const aboveRow = matrix[i - 1] || null`1`
        if (aboveRow) {
            for (let j = 0; j < i+1; j++) {
                matRow.push((aboveRow[j-1]||0)+(aboveRow[j]||0))
            }
        } else{
            matRow.push(1)
        }
        matrix.push(matRow)
    }
    return matrix
};

console.log(generate(6))