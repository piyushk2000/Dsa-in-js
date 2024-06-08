/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var setZeroes = function (matrix) {
    if (matrix.length == 1) {
  if (matrix[0].includes(0)) {
      for (i = 0; i < matrix[0].length; i++) {
          matrix[0][i] = 0;
      }
  }
  return matrix;
}

  const arrLen = matrix.length
  const setZeroMatrix = []

  for (let i = 0; i < arrLen; i++) {
      const subMatrixLen = matrix[1].length
      for (let j = 0; j < subMatrixLen; j++) {
          if (matrix[i][j] == 0) {
              setZeroMatrix.push([i, j])
          }
      }
  }
  console.log(setZeroMatrix)
  7
  for (x = 0; x < setZeroMatrix.length; x++) {
      let setZeroRow = setZeroMatrix[x][0]
      let setZeroColumn = setZeroMatrix[x][1]
      for (let i = 0; i < matrix[setZeroRow].length; i++) {
          matrix[setZeroRow][i] = 0
      }
      for (let j = 0; j < matrix.length; j++) {
          matrix[j][setZeroColumn] = 0
      }
  }

  return (matrix)
}