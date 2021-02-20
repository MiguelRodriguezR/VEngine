export function initCanvas(reference, options: any = {}) {
  reference.canvas = (Array.from(document.querySelectorAll('canvas')).reverse()[0] as HTMLCanvasElement);
  reference.ctx = reference.canvas.getContext(options.dimention ? options.dimention : '2d');
  reference.ctx.canvas.width = window.innerWidth - 200;
  reference.ctx.canvas.height = window.innerHeight;
}

export function clear(reference, color = 'white') {
  reference.ctx.clearRect(-reference.canvas.width, -reference.canvas.height, reference.canvas.width * 2, reference.canvas.height * 2);
  // reference.ctx.rect(0, 0, reference.canvas.width, reference.canvas.height);
  // reference.ctx.fillStyle = color;
  // reference.ctx.fill();
}

export function clear3D(reference) {
  reference.ctx.clearColor(255, 255, 255, 1);
  reference.ctx.clear(reference.ctx.COLOR_BUFFER_BIT);
}

export function drawPoint(reference, x, y, color) {
  reference.ctx.fillStyle = color;
  reference.ctx.fillRect(x, y, 1, 1);
}

export function beginShape(reference) {
  reference.ctx.beginPath();
  reference.ctx.moveTo(0, 0);
}

export function endShape(reference, close = true) {
  if (close) {
    reference.ctx.closePath();

  }
  reference.ctx.stroke();
}

export function toDegrees(angle) {
  return angle * (180 / Math.PI);
}

export function toRadians(angle) {
  return angle * (Math.PI / 180);
}


