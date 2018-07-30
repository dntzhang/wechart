/*
 * Approximate a general elliptical arc using [up to four] cubic Beziers.
 * https://www.joecridge.me/content/pdf/bezier-arcs.pdf
 */
const PI = Math.PI
const TWO_PI = PI * 2
const atan = Math.atan
const tan = Math.tan
const cos = Math.cos
const sin = Math.sin
const HALF_PI = PI / 2
const min = Math.min

export default function arc2bezier (x, y, w, h, start, stop) {
  // Make all angles positive...
  while (start < 0) {
    start += TWO_PI
  }
  while (stop < 0) {
    stop += TWO_PI
  }

  // ...and confine them to the interval [0,TWO_PI).
  // start %= TWO_PI;
  // stop %= TWO_PI;

  // Adjust angles to counter linear scaling.
  if (start <= HALF_PI) {
    start = atan(w / h * tan(start))
  } else if (start > HALF_PI && start <= 3 * HALF_PI) {
    start = atan(w / h * tan(start)) + PI
  } else {
    start = atan(w / h * tan(start)) + TWO_PI
  }
  if (stop <= HALF_PI) {
    stop = atan(w / h * tan(stop))
  } else if (stop > HALF_PI && stop <= 3 * HALF_PI) {
    stop = atan(w / h * tan(stop)) + PI
  } else {
    stop = atan(w / h * tan(stop)) + TWO_PI
  }

  // Exceed the interval if necessary in order to preserve the size and
  // orientation of the arc.
  if (start > stop) {
    stop += TWO_PI
  }

  // Create curves
  var epsilon = 0.00001 // Smallest visible angle on displays up to 4K.
  var arcToDraw = 0
  var curves = []
  while (stop - start > epsilon) {
    arcToDraw = min(stop - start, HALF_PI)
    curves.push(acuteArcToBezier(start, arcToDraw))
    start += arcToDraw
  }

  // Draw curves
  var rx = w / 2.0
  var ry = h / 2.0
  const result = []
  curves.forEach(function (curve, index) {
    result.push([x + rx * curve.ax, y + ry * curve.ay,
      x + rx * curve.bx, y + ry * curve.by,
      x + rx * curve.cx, y + ry * curve.cy,
      x + rx * curve.dx, y + ry * curve.dy])
  })

  return result
}

/**
* Generate a cubic Bezier representing an arc on the unit circle of total
* angle ‘size‘ radians, beginning ‘start‘ radians above the x-axis.
*/
function acuteArcToBezier (start, size) {
  // Evaluate constants.
  var alpha = size / 2.0,
    cos_alpha = cos(alpha),
    sin_alpha = sin(alpha),
    cot_alpha = 1.0 / tan(alpha),
    phi = start + alpha, // This is how far the arc needs to be rotated.
    cos_phi = cos(phi),
    sin_phi = sin(phi),
    lambda = (4.0 - cos_alpha) / 3.0,
    mu = sin_alpha + (cos_alpha - lambda) * cot_alpha

    // Return rotated waypoints.
  return {
    ax: cos(start),
    ay: sin(start),
    bx: lambda * cos_phi + mu * sin_phi,
    by: lambda * sin_phi - mu * cos_phi,
    cx: lambda * cos_phi - mu * sin_phi,
    cy: lambda * sin_phi + mu * cos_phi,
    dx: cos(start + size),
    dy: sin(start + size)
  }
}
