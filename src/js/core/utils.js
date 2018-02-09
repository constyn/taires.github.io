export function initializeMatrix(width, height, value) {

  let matrix = [];

  for (let h = 0; h < height; h++) {
    let row = [];
    for (let w = 0; w < width; w++) {
      let val = typeof value === 'function'
        ? value()
        : value;
      row.push(val);
    }
    matrix.push(row)
  };

  return matrix;

}

export function getNeightbours(matrix, x, y, pushUndefine = false) {
  let arr = [],
    len = matrix[0].length;


  for (let j = -1; j < 2; j++) {
    for (let i = -1; i < 2; i++) {

      if (i !== 0 || j !== 0) {
        if (x + i > -1 && x + i < len && y + j > -1 && y + j < matrix.length) {
          arr.push(matrix[y + j][x + i]);
        } else if (pushUndefine) {
          arr.push(undefined)
        }
      }
    }
  }

  return arr;

}
