import Paddle from './paddle'
import InputHandler from './inputHandler'
import Ball from './ball'
import {
  buildLevel,
  level1
} from './level'

class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight
  }

  start() {
    this.paddle = new Paddle(this)
    this.ball = new Ball(this)
    let blocks = buildLevel(this, level1)

    new InputHandler(this.paddle)


    this.gameObject = [
      this.paddle, this.ball, ...blocks
    ]
  }

  update(deltaTime) {
    this.gameObject.forEach(obj => obj.update(deltaTime))
    this.gameObject = this.gameObject.filter(obj => !obj.markedForDeletion)
  }

  draw(ctx) {
    this.gameObject.forEach(obj => obj.draw(ctx))
  }

}

export default Game