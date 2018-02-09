const base64Img = require('base64-img');
const fs = require('fs')

var output = base64Img.base64Sync('./src/assets/tileset.png');

let res = `
export const TILE_SIZE = 16;
export const DEFAULT_TILESET = "${output}"
`

fs.writeFileSync(`./src/js/defaults/tilesets.js`, res);
