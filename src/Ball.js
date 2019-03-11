import {
  detectCollision
} from './collisionDetection'

class Ball {
  constructor(game) {
    this.gameWidth = game.gameWidth
    this.gameHeight = game.gameHeight
    this.game = game

    this.image = document.getElementById('ball')
    this.position = {
      x: 10,
      y: 120
    }

    this.speed = {
      x: 4,
      y: -8
    }

    this.size = 16
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size)
  }

  update(deltaTime) {
    this.position.x += this.speed.x
    this.position.y += this.speed.y

    // ballの左右の壁のあたり判定
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x
    }

    // ballの上下の壁のあたり判定
    if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {
      this.speed.y = -this.speed.y
    }

    // Death
    if (this.position.y + this.size > this.gameHeight) {
      this.game.gamestate = 3
    }

    if (detectCollision(this, this.game.paddle)) {
      this.speed.y = -this.speed.y
      // ボールの位置をバドルの上に載せるようにする
      // 理由がよくわからにんだけど、やらないとバドルにボールがあたったときの挙動があやしい
      this.position.y = this.game.paddle.position.y - this.size;
    }

  }

}

export default Ball