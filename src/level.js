import './block'
import Block from './block';

export function buildLevel(game, level) {
  let blocks = []

  level.forEach((row, rowIndex) => {
    row.forEach((block, blockIndex) => {
      if (block === 1) {
        let position = {
          x: 80 * blockIndex,
          y: 40 + 24 * rowIndex
        }
        blocks.push(new Block(game, position, rowIndex, blockIndex))
      }

    })
  });

  return blocks
}

export const level1 = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
]