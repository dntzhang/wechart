
import Vector2 from './vector2'

export function getControlPoint (path) {
  let rt = 0.382
  let i = 0, count = path.length - 2
  let arr = []
  let ncv
  for (; i < count; i++) {
    let a = path[i], b = path[i + 1], c = path[i + 2]
    let v1 = new Vector2(a.x - b.x, a.y - b.y)
    let v2 = new Vector2(c.x - b.x, c.y - b.y)
    let v1Len = v1.length(), v2Len = v2.length()

    let cv = v1.normalize().add(v2.normalize())

    if (cv.x === 0 && cv.y === 0) {
      arr.push(a, b)
      continue
    } else {
      ncv = cv.normalize()
    }

    let ncp1 = new Vector2(ncv.y, ncv.x * -1)
    let ncp2 = new Vector2(ncv.y * -1, ncv.x)
    let p1, p2
    if (ncp1.angle(v1) < 90) {
      p1 = ncp1.multiply(v1Len * rt).add(b)
      p2 = ncp2.multiply(v2Len * rt).add(b)
      arr.push(p1, p2)
    } else {
      p1 = ncp1.multiply(v2Len * rt).add(b)
      p2 = ncp2.multiply(v1Len * rt).add(b)
      arr.push(p2, p1)
    }
  }
  return arr
}
