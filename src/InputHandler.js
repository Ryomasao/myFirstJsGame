class InputHandler {
  constructor(paddle) {
    document.addEventListener('keydown', e => {
      switch (e.keyCode) {
        case 65:
          paddle.moveLeft()
          break
        case 68:
          paddle.moveRight()
          break
        default:
          break
      }
    })
    document.addEventListener('keyup', e => {
      // 1. rightを押す keydown->paddle.speed = 10 ※おしてる間にevent発生
      // 2. leftを押す keydown->paddle.speed = -10 ※後に押したkeyのkeycodeがevent.keycodeとしてくるっぽい
      // 3. rightを離す keyup->paddle.speed = 0
      // こういった操作をすると、left移動中に一瞬とまるにで、今どっちに向かっている状態なのかを考慮する
      switch (e.keyCode) {
        case 65:
          // 左に動いてる最中だったら、止める
          if (paddle.speed < 0) paddle.stop()
          break
        case 68:
          if (paddle.speed > 0) paddle.stop()
          break
        default:
          break
      }
    })
  }
}

export default InputHandler
