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
    ex = sx + random(10, 20, true),
    ey = sy + random(10, 20, true);

  world.iterateMatrix(heights, (val) => {
    minH = Math.min(minH, val);
    maxH = Math.max(maxH, val);
  })

  maxH -= 4;

  world.rangeMatrix([
    [
      sx, ex
    ],
    [
      sy, ey
    ]
  ], (x, y, boundary) => {
    layers[maxH][y][x] = getItem('wall', {
      biome: biomes[y][x],
      tile: world.random(48, 51, true)
    });
  });

  world.rangeMatrix([
    [
      sx, ex
    ],
    [
      sy, ey
    ]
  ], (x, y, boundary) => {
    if (boundary) {
      layers[maxH + 1][y][x] = getItem('wall', {
        biome: biomes[y][x],
        tile: y === ey - 1
          ? 7
          : world.random(0, 1, true)
      });
    } else if (y === ey - 2 || y === sy + 1) {
      layers[maxH + 1][y][x] = getItem('wall', {
        biome: biomes[y][x],
        tile: y === sy + 1
          ? 7
          : world.random(0, 1, true)
      });
    }
  });

}
