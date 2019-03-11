import './style.css'
import Game from './game'

const canvas = document.getElementById('game-screen')
const ctx = canvas.getContext('2d')

const GAME_WIDTH = 800
const GAME_HEIGHT = 600

const game = new Game(GAME_WIDTH, GAME_HEIGHT)

let lastTime = 0

game.start()


function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime
  lastTime = timestamp
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)

  game.update(deltaTime)
  game.draw(ctx)

  // 60FPS
  requestAnimationFrame(gameLoop)
}

//gameLoop()
requestAnimationFrame(gameLoop)