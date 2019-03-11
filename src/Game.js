import Paddle from './paddle'
import InputHandler from './inputHandler'
import Ball from './ball'
import {
  buildLevel,
  level1
} from './level'

const GAME_STATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3,
  CLEAR: 4
}

class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight
    this.gamestate = GAME_STATE.MENU
    this.paddle = new Paddle(this)
    this.ball = new Ball(this)
    this.gameObject = []
    this.blocks = []

    new InputHandler(this.paddle, this)
  }

  start() {
    this.gamestate = GAME_STATE.RUNNING

    this.blocks = buildLevel(this, level1)
    this.gameObject = [
      this.paddle, this.ball
    ]
  }

  update(deltaTime) {
    if (this.gamestate === GAME_STATE.PAUSED ||
      this.gamestate === GAME_STATE.MENU ||
      this.gamestate === GAME_STATE.GAMEOVER ||
      this.gamestate === GAME_STATE.CLEAR) return


    if (this.blocks.length === 0) {
      this.gamestate = GAME_STATE.CLEAR
    }

    [...this.gameObject, ...this.blocks].forEach(obj => obj.update(deltaTime))
    this.blocks = this.blocks.filter(obj => !obj.markedForDeletion)

  }

  draw(ctx) {
    [...this.gameObject, ...this.blocks].forEach(obj => obj.draw(ctx))

    if (this.gamestate === GAME_STATE.MENU) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight)
      ctx.fillStyle = "rgba(0,0,0,1)"
      ctx.fill()

      ctx.font = "30px Arial"
      ctx.fillStyle = "white"
      ctx.textAlign = "center"
      ctx.fillText("Press SPACE to stat GAME", this.gameWidth / 2, this.gameHeight / 2)
    }

    if (this.gamestate === GAME_STATE.PAUSED) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight)
      ctx.fillStyle = "rgba(0,0,0,0.5)"
      ctx.fill()

      ctx.font = "30px Arial"
      ctx.fillStyle = "white"
      ctx.textAlign = "center"
      ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2)
    }

    if (this.gamestate === GAME_STATE.GAMEOVER) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight)
      ctx.fillStyle = "rgba(0,0,0,1)"
      ctx.fill()

      ctx.font = "30px Arial"
      ctx.fillStyle = "white"
      ctx.textAlign = "center"
      ctx.fillText("YOU LOSE!!!!", this.gameWidth / 2, this.gameHeight / 2)
    }

    if (this.gamestate === GAME_STATE.CLEAR) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight)
      ctx.fillStyle = "rgba(0,0,0,1)"
      ctx.fill()

      ctx.font = "30px Arial"
      ctx.fillStyle = "white"
      ctx.textAlign = "center"
      ctx.fillText("YOU WIN!!!!", this.gameWidth / 2, this.gameHeight / 2)
    }

  }

  togglePause() {
    if (this.gamestate === GAME_STATE.PAUSED) {
      this.gamestate = GAME_STATE.RUNNING
    } else {
      this.gamestate = GAME_STATE.PAUSED
    }
  }

}

export default Game