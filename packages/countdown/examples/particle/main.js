var canvas = document.getElementById('myCanvas')
var cxt = canvas.getContext('2d')
cxt.fillStyle = '#FF0000'
var dropBall = []; var one = []; one.push({ x: 3, y: 0 }); one.push({ x: 3, y: 1 }); one.push({ x: 3, y: 2 }); one.push({ x: 3, y: 3 }); one.push({ x: 3, y: 4 }); one.push({ x: 3, y: 5 }); one.push({ x: 3, y: 6 }); var two = []; two.push({ x: 0, y: 0 }); two.push({ x: 1, y: 0 }); two.push({ x: 2, y: 0 }); two.push({ x: 3, y: 0 }); two.push({ x: 3, y: 1 }); two.push({ x: 3, y: 2 }); two.push({ x: 3, y: 3 }); two.push({ x: 2, y: 3 }); two.push({ x: 1, y: 3 }); two.push({ x: 0, y: 3 }); two.push({ x: 0, y: 4 }); two.push({ x: 0, y: 5 }); two.push({ x: 0, y: 6 }); two.push({ x: 1, y: 6 }); two.push({ x: 2, y: 6 }); two.push({ x: 3, y: 6 }); var three = []; three.push({ x: 0, y: 0 }); three.push({ x: 1, y: 0 }); three.push({ x: 2, y: 0 }); three.push({ x: 3, y: 0 }); three.push({ x: 3, y: 1 }); three.push({ x: 3, y: 2 }); three.push({ x: 3, y: 3 }); three.push({ x: 2, y: 3 }); three.push({ x: 1, y: 3 }); three.push({ x: 0, y: 3 }); three.push({ x: 3, y: 4 }); three.push({ x: 3, y: 5 }); three.push({ x: 0, y: 6 }); three.push({ x: 1, y: 6 }); three.push({ x: 2, y: 6 }); three.push({ x: 3, y: 6 }); var four = []; four.push({ x: 0, y: 0 }); four.push({ x: 0, y: 1 }); four.push({ x: 0, y: 2 }); four.push({ x: 0, y: 3 }); four.push({ x: 1, y: 3 }); four.push({ x: 2, y: 3 }); four.push({ x: 3, y: 3 }); four.push({ x: 3, y: 4 }); four.push({ x: 3, y: 5 }); four.push({ x: 3, y: 6 }); four.push({ x: 3, y: 0 }); four.push({ x: 3, y: 1 }); four.push({ x: 3, y: 2 }); var five = []; five.push({ x: 0, y: 0 }); five.push({ x: 1, y: 0 }); five.push({ x: 2, y: 0 }); five.push({ x: 3, y: 0 }); five.push({ x: 0, y: 1 }); five.push({ x: 0, y: 2 }); five.push({ x: 3, y: 3 }); five.push({ x: 2, y: 3 }); five.push({ x: 1, y: 3 }); five.push({ x: 0, y: 3 }); five.push({ x: 3, y: 4 }); five.push({ x: 3, y: 5 }); five.push({ x: 0, y: 6 }); five.push({ x: 1, y: 6 }); five.push({ x: 2, y: 6 }); five.push({ x: 3, y: 6 }); var six = []; six.push({ x: 0, y: 0 }); six.push({ x: 1, y: 0 }); six.push({ x: 2, y: 0 }); six.push({ x: 3, y: 0 }); six.push({ x: 0, y: 1 }); six.push({ x: 0, y: 2 }); six.push({ x: 3, y: 3 }); six.push({ x: 2, y: 3 }); six.push({ x: 1, y: 3 }); six.push({ x: 0, y: 3 }); six.push({ x: 3, y: 4 }); six.push({ x: 3, y: 5 }); six.push({ x: 0, y: 6 }); six.push({ x: 1, y: 6 }); six.push({ x: 2, y: 6 }); six.push({ x: 3, y: 6 }); six.push({ x: 0, y: 4 }); six.push({ x: 0, y: 5 }); var seven = []; seven.push({ x: 3, y: 0 }); seven.push({ x: 3, y: 1 }); seven.push({ x: 3, y: 2 }); seven.push({ x: 3, y: 3 }); seven.push({ x: 3, y: 4 }); seven.push({ x: 3, y: 5 }); seven.push({ x: 3, y: 6 }); seven.push({ x: 0, y: 0 }); seven.push({ x: 1, y: 0 }); seven.push({ x: 2, y: 0 }); var eight = []; eight.push({ x: 0, y: 0 }); eight.push({ x: 1, y: 0 }); eight.push({ x: 2, y: 0 }); eight.push({ x: 3, y: 0 }); eight.push({ x: 0, y: 1 }); eight.push({ x: 0, y: 2 }); eight.push({ x: 3, y: 3 }); eight.push({ x: 2, y: 3 }); eight.push({ x: 1, y: 3 }); eight.push({ x: 0, y: 3 }); eight.push({ x: 3, y: 4 }); eight.push({ x: 3, y: 5 }); eight.push({ x: 0, y: 6 }); eight.push({ x: 1, y: 6 }); eight.push({ x: 2, y: 6 }); eight.push({ x: 3, y: 6 }); eight.push({ x: 0, y: 4 }); eight.push({ x: 0, y: 5 }); eight.push({ x: 3, y: 1 }); eight.push({ x: 3, y: 2 }); var nine = []; nine.push({ x: 0, y: 0 }); nine.push({ x: 1, y: 0 }); nine.push({ x: 2, y: 0 }); nine.push({ x: 3, y: 0 }); nine.push({ x: 0, y: 1 }); nine.push({ x: 0, y: 2 }); nine.push({ x: 3, y: 3 }); nine.push({ x: 2, y: 3 }); nine.push({ x: 1, y: 3 }); nine.push({ x: 0, y: 3 }); nine.push({ x: 3, y: 4 }); nine.push({ x: 3, y: 5 }); nine.push({ x: 0, y: 6 }); nine.push({ x: 1, y: 6 }); nine.push({ x: 2, y: 6 }); nine.push({ x: 3, y: 6 }); nine.push({ x: 3, y: 1 }); nine.push({ x: 3, y: 2 }); var zero = []; zero.push({ x: 0, y: 0 }); zero.push({ x: 1, y: 0 }); zero.push({ x: 2, y: 0 }); zero.push({ x: 3, y: 0 }); zero.push({ x: 0, y: 1 }); zero.push({ x: 0, y: 2 }); zero.push({ x: 3, y: 3 }); zero.push({ x: 0, y: 3 }); zero.push({ x: 3, y: 4 }); zero.push({ x: 3, y: 5 }); zero.push({ x: 0, y: 6 }); zero.push({ x: 1, y: 6 }); zero.push({ x: 2, y: 6 }); zero.push({ x: 3, y: 6 }); zero.push({ x: 0, y: 4 }); zero.push({ x: 0, y: 5 }); zero.push({ x: 3, y: 1 }); zero.push({ x: 3, y: 2 }); function getRandomNumber (min, max) { return (min + Math.floor(Math.random() * (max - min + 1))) }

function getBalls (num) {
  if (num === 0) { for (i in zero) { var result = JSLINQ(one).Count(function (item) { return item.x == zero[i].x && item.y == zero[i].y }); if (result == 0) { var ball = { x: 100 + zero[i].x * 20, y: 100 + zero[i].y * 20, r: 8, vx: getRandomNumber(-250, 250), vy: getRandomNumber(-150, 150) }; dropBall.push(ball) } } }
  if (num === 1) { for (i in one) { var result = JSLINQ(two).Count(function (item) { return item.x == one[i].x && item.y == one[i].y }); if (result == 0) { var ball = { x: 100 + one[i].x * 20, y: 100 + one[i].y * 20, r: 8, vx: getRandomNumber(-250, 250), vy: getRandomNumber(-150, 150) }; dropBall.push(ball) } } }
  if (num === 2) { for (i in two) { var result = JSLINQ(three).Count(function (item) { return item.x == two[i].x && item.y == two[i].y }); if (result == 0) { var ball = { x: 100 + two[i].x * 20, y: 100 + two[i].y * 20, r: 8, vx: getRandomNumber(-250, 250), vy: getRandomNumber(-150, 150) }; dropBall.push(ball) } } }
  if (num === 3) { for (i in three) { var result = JSLINQ(four).Count(function (item) { return item.x == three[i].x && item.y == three[i].y }); if (result == 0) { var ball = { x: 100 + three[i].x * 20, y: 100 + three[i].y * 20, r: 8, vx: getRandomNumber(-250, 250), vy: getRandomNumber(-150, 150) }; dropBall.push(ball) } } }
  if (num === 4) { for (i in four) { var result = JSLINQ(five).Count(function (item) { return item.x == four[i].x && item.y == four[i].y }); if (result == 0) { var ball = { x: 100 + four[i].x * 20, y: 100 + four[i].y * 20, r: 8, vx: getRandomNumber(-250, 250), vy: getRandomNumber(-150, 150) }; dropBall.push(ball) } } }
  if (num === 5) { for (i in five) { var result = JSLINQ(six).Count(function (item) { return item.x == five[i].x && item.y == five[i].y }); if (result == 0) { var ball = { x: 100 + five[i].x * 20, y: 100 + five[i].y * 20, r: 8, vx: getRandomNumber(-250, 250), vy: getRandomNumber(-150, 150) }; dropBall.push(ball) } } }
  if (num === 6) { for (i in six) { var result = JSLINQ(seven).Count(function (item) { return item.x == six[i].x && item.y == six[i].y }); if (result == 0) { var ball = { x: 100 + six[i].x * 20, y: 100 + six[i].y * 20, r: 8, vx: getRandomNumber(-250, 250), vy: getRandomNumber(-150, 150) }; dropBall.push(ball) } } }
  if (num === 7) { for (i in seven) { var result = JSLINQ(eight).Count(function (item) { return item.x == seven[i].x && item.y == seven[i].y }); if (result == 0) { var ball = { x: 100 + seven[i].x * 20, y: 100 + seven[i].y * 20, r: 8, vx: getRandomNumber(-250, 250), vy: getRandomNumber(-150, 150) }; dropBall.push(ball) } } }
  if (num === 8) { for (i in eight) { var result = JSLINQ(nine).Count(function (item) { return item.x == eight[i].x && item.y == eight[i].y }); if (result == 0) { var ball = { x: 100 + eight[i].x * 20, y: 100 + eight[i].y * 20, r: 8, vx: getRandomNumber(-250, 250), vy: getRandomNumber(-150, 150) }; dropBall.push(ball) } } }
  if (num === 9) { for (i in nine) { var result = JSLINQ(zero).Count(function (item) { return item.x == nine[i].x && item.y == nine[i].y }); if (result == 0) { var ball = { x: 100 + nine[i].x * 20, y: 100 + nine[i].y * 20, r: 8, vx: getRandomNumber(-250, 250), vy: getRandomNumber(-150, 150) }; dropBall.push(ball) } } }
}
function draw (num) {
  switch (num) {
    case 1: for (i in one) { cxt.arc(100 + one[i].x * 20, 100 + one[i].y * 20, 8, 0, Math.PI * 2, true); cxt.closePath() }
      break
    case 2: for (i in two) { cxt.arc(100 + two[i].x * 20, 100 + two[i].y * 20, 8, 0, Math.PI * 2, true); cxt.closePath() }
      break
    case 3: for (i in three) { cxt.arc(100 + three[i].x * 20, 100 + three[i].y * 20, 8, 0, Math.PI * 2, true); cxt.closePath() }
      break
    case 4: for (i in four) { cxt.arc(100 + four[i].x * 20, 100 + four[i].y * 20, 8, 0, Math.PI * 2, true); cxt.closePath() }
      break
    case 5: for (i in five) { cxt.arc(100 + five[i].x * 20, 100 + five[i].y * 20, 8, 0, Math.PI * 2, true); cxt.closePath() }
      break
    case 6: for (i in six) { cxt.arc(100 + six[i].x * 20, 100 + six[i].y * 20, 8, 0, Math.PI * 2, true); cxt.closePath() }
      break
    case 7: for (i in seven) { cxt.arc(100 + seven[i].x * 20, 100 + seven[i].y * 20, 8, 0, Math.PI * 2, true); cxt.closePath() }
      break
    case 8: for (i in eight) { cxt.arc(100 + eight[i].x * 20, 100 + eight[i].y * 20, 8, 0, Math.PI * 2, true); cxt.closePath() }
      break
    case 9: for (i in nine) { cxt.arc(100 + nine[i].x * 20, 100 + nine[i].y * 20, 8, 0, Math.PI * 2, true); cxt.closePath() }
      break
    case 0: for (i in zero) { cxt.arc(100 + zero[i].x * 20, 100 + zero[i].y * 20, 8, 0, Math.PI * 2, true); cxt.closePath() }
      break
    default:
  }
}
var cyc = 20; var count = 0; var a = 80; var t = 0

setInterval(function () {
  if (dropBall.length > 100) dropBall.shift()
  cxt.clearRect(0, 0, canvas.width, canvas.height)
  cxt.beginPath()
  draw(count % 10)
  for (i in dropBall) {
    cxt.arc(dropBall[i].x, dropBall[i].y, dropBall[i].r, 0, Math.PI * 2, true)
    cxt.closePath()
    dropBall[i].y += dropBall[i].vy * cyc / 1000; dropBall[i].x += dropBall[i].vx * cyc / 1000; if (dropBall[i].r + dropBall[i].y > canvas.height) { dropBall[i].vy *= -0.7; dropBall[i].y = canvas.height - dropBall[i].r }
    dropBall[i].vy += a
  }
  cxt.fill(); t += cyc; if (t >= 1000) { getBalls(count % 10); t = 0; count++; draw(count % 10) }
}, cyc)
