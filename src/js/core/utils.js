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

export function iterateMatrix(matrix, fn) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      fn(matrix[i][j], j, i);
    }
  }
}

export function iterate3DMatrix(matrix, fn) {
  for (let h = 0; h < matrix.length; h++) {
    for (let i = 0; i < matrix[h].length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        fn(matrix[h][i][j], j, i, h);
      }
    }
  }
}

export function iterateMatrixBound(matrix, fn, opt) {
  if (!opt) {
    throw new Error('Options not provided to: iterateMatrixBound. Use iterateMatrix instead');
  }
  let def = Object.assign({
    sx: 0,
    sy: 0,
    l: 0,
    h: 0,
    ex: 0,
    ey: 0,
    startFrom0: false
  }, opt)

  let toX = opt.l || opt.sx + opt.ex;
  let toY = opt.h || opt.sy + opt.ey;

  for (let i = def.sy; i < toY; i++) {
    for (let j = def.sx; j < toX; j++) {
      def.startFrom0
        ? fn(matrix[i][j], j - def.sx, i - def.sy)
        : fn(matrix[i][j], j, i);
    }
  }
}

export function repeat(times = 1, fn) {
  for (var i = 0; i < times; i++) {
    fn(i);
  }
}

export function iterate3DMatrixBound(matrix, fn, opt) {
  if (!opt) {
    throw new Error('Options not provided to: iterateMatrixBound. Use iterateMatrix instead');
  }
  let def = Object.assign({
    sx: 0,
    sy: 0,
    sz: 0,
    l: 0,
    h: 0,
    t: 0,
    ex: 0,
    ey: 0,
    ez: 0
  }, opt)

  let toX = opt.l || opt.sx + opt.ex;
  let toY = opt.h || opt.sy + opt.ey;
  let toZ = opt.t || opt.sz + opt.ez;

  for (let l = def.sz; l < toY; l++) {
    for (let i = def.sy; i < toY; i++) {
      for (let j = def.sx; j < toX; j++) {
        fn(matrix[l][i][j], l, j, i);
      }
    }
  }
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

export function range(start, end, fn, boundary) {
  for (var i = start; i < end; i++) {
    fn(i, i === start || i === end - 1)
  }
}

export function rangeMatrix(ranges, fn) {
  range(ranges[1][0], ranges[1][1], (y, boundaryY) => {
    range(ranges[0][0], ranges[0][1], (x, boundaryX) => {
      fn(x, y, boundaryX || boundaryY);
    })
  })

}

export function random(min, max, int) {
  if (min === undefined) {
    return Math.random();
  } else {
    let res = Math.random() * (max - min) + min;
    if (int) {
      return Math.round(res);
    }
    return res;
  }
}

export function getRenderBoundaries() {
  return [document.body.clientWidth, window.innerHeight]
}
