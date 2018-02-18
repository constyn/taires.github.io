const base64Img = require('base64-img');
const fs = require('fs')

let arr = ['ground', 'walls']


arr.forEach(item => {
  var output = base64Img.base64Sync(`./src/assets/${item}.png`);

  let res = `export const TILE_SIZE = 16;
  export const DEFAULT_TILESET = "${output}"`

  fs.writeFileSync(`./src/js/defaults/${item}.js`, res);

})
