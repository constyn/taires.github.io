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
    sx = random(10, width - 20, true),
    sy = random(10, height - 20, true),
    ex = sx + random(10, 20, true),
    ey = sy + random(10, 20, true);

  world.iterateMatrixBound(heights, (val, x, y) => {
    minH = Math.min(minH, val);
    maxH = Math.max(maxH, val + 1);
  }, {sx, sy, ex, ey})

  world.range(minH, maxH, (i) => {

    world.rangeMatrix([
      [
        sx, ex
      ],
      [
        sy, ey
      ]
    ], (x, y, boundary) => {
      if (layers[i][y][x] === undefined || i === maxH - 1) {
        world.addItem('wall', x, y, i, {
          biome: biomes[y][x],
          tile: world.random(48, 51, true)
        });
      }
    });
  })

  world.rangeMatrix([
    [
      sx, ex
    ],
    [
      sy, ey
    ]
  ], (x, y, boundary) => {
    if (boundary) {
      world.addItem(
        'wall', x, y, y === sy && x > sx && x < ex - 1
        ? maxH + 1
        : maxH, {
        biome: biomes[y][x],
        tile: y === ey - 1
          ? 7
          : world.random(0, 1, true)
      });
    } else if (y === ey - 2 || y === sy + 1) {
      world.addItem(
        'wall', x, y, y === sy + 1
        ? maxH
        : maxH + 1, {
        biome: biomes[y][x],
        tile: y === sy + 1
          ? 7
          : world.random(0, 1, true)
      });
    }
  });

}
