import Items from '../items';

export function layoutBuildings(world) {
  let {
    layers,
    heights,
    width,
    height,
    biomes,
    random,
    getItem
  } = world;

  let item,
    minH = layers.length,
    maxH = 0,
    sx = random(10, 30, true),
    sy = random(10, 30, true),
    ex = sx+random(10, 20, true),
    ey = sy+random(10, 20, true);

  world.iterateMatrix(heights, (val) => {
    minH = Math.min(minH, val);
    maxH = Math.max(maxH, val);
  })

console.log(maxH);
maxH-=4;


  world.rangeMatrix([[sx, ex], [sy, ey]], (x, y, boundary) => {
    layers[maxH][y][x] = getItem('block', {
      biome: biomes[y][x],
      tile: 50
    });
  });

  world.rangeMatrix([[sx, ex], [sy, ey]], (x, y, boundary) => {
    if (boundary) {
      layers[maxH+1][y][x] = getItem('block', {
        biome: biomes[y][x],
        tile: y === ey-1 ? 7 : 1
      });
    } else if (y===ey-2 || y === sy+1) {
      layers[maxH+1][y][x] = getItem('block', {
        biome: biomes[y][x],
        tile: y === sy+1 ? 7: 1
      });
    }
  });



  /**
  minWidth = 5,
  minHeight = 5,
  maxWidth = 15,
  maxHeight = 15;

  let x = Math.round(Math.random() * (width - maxWidth)),
    y = Math.round(Math.random() * (height - maxHeight)),
    bw = minWidth + (Math.round(Math.random() * maxWidth - minWidth)),
    bh = minHeight + (Math.round(Math.random() * maxHeight - minHeight));

  let minH = 10,
    maxH = 0;
  for (let i = x; i < x + bw; i++) {
    for (let j = y; j < y + bh; j++) {
      minH = Math.min(minH, heights[j][i]);
      maxH = Math.max(maxH, heights[j][i]);
    }
  }

  for (let i = x; i < x + bw; i++) {
    for (let j = y; j < y + bh; j++) {
      for (let h = minH; h < maxH + 2; h++) {
        let item;
        if (h > maxH) {
          if (i === x || i === x + bw - 1 || j === y || j === y + bh - 1) {
            item = Items.getItem('block', {
              biome: biomes[j][i],
              tile: 1
            });
          } else {
            item = Items.getItem('block', {
              biome: biomes[j][i],
              tile: 24
            });
          }
        } else if (layers[h][j][i] === undefined) {
          item = Items.getItem('block', {biome: biomes[j][i]
          });
        }

        layers[h][j][i] = item;
      }
    }
  }  */

}
