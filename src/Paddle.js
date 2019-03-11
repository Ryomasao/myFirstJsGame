class Paddle {
  constructor(game) {
    this.gameWidth = game.gameWidth
    this.gameHeight = game.gameHeight

    this.width = 150
    this.height = 30

    this.maxSpeed = 7
    this.speed = 0

    this.position = {
      x: this.gameWidth / 2 - this.width / 2,
      y: this.gameHeight - this.height - 10
    }
  }

  draw(ctx) {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  stop() {
    this.speed = 0
  }

  moveLeft() {
    this.speed = -this.maxSpeed
  }

  moveRight() {
    this.speed = this.maxSpeed
  }

  update(deltaTime) {
    //if (!deltaTime) return

    this.position.x += this.speed

    if (this.position.x < 0) {
      this.position.x = 0
    }

    if (this.position.x > this.gameWidth - this.width) {
      this.position.x = this.gameWidth - this.width
    }

    // 一秒間に5px移動する
    //this.position.x += 5 / deltaTime;
  }
}

export default Paddle