import {
  detectCollision
} from './collisionDetection'

class Block {
  constructor(game, position, row, column) {
    this.gameWidth = game.gameWidth
    this.gameHeight = game.gameHeight
    this.game = game
    this.row = row
    this.column = column

    this.image = document.getElementById('block')

    this.position = position

    this.width = 80
    this.height = 24

    this.markedForDeletion = false

  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height)

  }

  update() {
    if (detectCollision(this.game.ball, this)) {
      this.markedForDeletion = true
      this.game.ball.speed.y = -this.game.ball.speed.y
    }
  }

}

export default Block