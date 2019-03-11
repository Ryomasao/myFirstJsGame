export function detectCollision(ball, gameObject) {

  // ballとpaddleのあたり判定
  const bottomOfBall = ball.position.y + ball.size
  const topOfBall = ball.position.y

  const topOfObject = gameObject.position.y
  const leftSideOfObject = gameObject.position.x
  const rightSideObject = gameObject.position.x + gameObject.width
  const bottomOfObject = gameObject.position.y + gameObject.height


  // x,yは左上から開始なので、下 or 右にいくにつれ数値が増える
  // paddleとボールの関係でいうと
  // ballの最下部のy座標とpaddleの最上部のy座標だけみれば、なんとなくあたり判定を理解できそう。
  // y座標だけみてると、パドルの横に落ちたものも当たったと判断してしまうので、ボールのx座標が、パドルのx座標内にいるかを見る
  // ballの上とパドルの下はあんま意識しなくてもよかったり？

  // blockとblockの間にballがくると、あたり判定がただしく判断できないっぽい

  //if (gameObject.row === 0 && gameObject.column === 1) {
  //  console.log(topOfObject, leftSideOfObject, rightSideObject, bottomOfObject)
  //}

  if (
    // ballObjectの最下部Yと対象のオブジェクトの最上部のYを比較 
    bottomOfBall >= topOfObject &&
    // ballObjectの最上部Yと対象オブジェクトの最下部Yを比較
    topOfBall <= bottomOfObject &&
    //  ballObjectの左辺xと 対象オブジェクトの左辺を比較
    ball.position.x >= leftSideOfObject &&
    //  ballObjectの右辺x 対象オブジェクトの右辺を比較
    ball.position.x + ball.size <= rightSideObject) {
    return true
  } else {
    return false
  }
}