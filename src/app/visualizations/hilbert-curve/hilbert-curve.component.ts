import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {beginShape, clear, endShape, initCanvas} from '../../shared/functions';
import {Reasignable} from "../../entities/reasignable";

@Component({
  selector: 'app-hilbert-curve',
  templateUrl: './hilbert-curve.component.html',
  styleUrls: ['./hilbert-curve.component.less']
})
export class HilbertCurveComponent implements OnInit, AfterViewInit, OnDestroy {

  canvas: HTMLCanvasElement;
  frame = null;
  ctx: any;

  order: Reasignable = new Reasignable(6, 'number');
  velocity: Reasignable = new Reasignable(1, 'slide', {min: 1, max: 10});
  lineWeight: Reasignable = new Reasignable(2, 'slide', {min: 1, max: 10});
  color: Reasignable = new Reasignable('#DDA15E', 'color');
  backgroundColor: Reasignable = new Reasignable('#BC6C25', 'color');

  N;
  total;
  path = [];
  counter = 0;
  actualOrder;

  constructor() {
    this.clearProps();
  }

  ngOnInit(): void {
    initCanvas(this);
  }

  ngAfterViewInit(): void {
    this.init();
    this.frame = window.requestAnimationFrame(this.animate.bind(this));
  }

  hilbert(i) {
    const points = [
      {x: 0, y: 0},
      {x: 0, y: 1},
      {x: 1, y: 1},
      {x: 1, y: 0},
    ];
    /* tslint:disable:no-bitwise */
    let index = i & 3;
    const v = points[index];
    for (let j = 1; j < this.actualOrder; j++) {

      i = i >>> 2;
      index = i & 3;
      /* tslint:enable:no-bitwise */

      const len = Math.pow(2, j);
      if (index == 0) {
        const temp = v.x;
        v.x = v.y;
        v.y = temp;
      } else if (index == 1) {
        v.y += len;
      } else if (index == 2) {
        v.x += len;
        v.y += len;
      } else if (index == 3) {
        const temp = len - 1 - v.x;
        v.x = len - 1 - v.y;
        v.y = temp;
        v.x += len;
      }
    }
    return v;
  }

  clearProps() {
    this.path = [];
    this.N = Math.pow(2, this.order.value);
    this.total = this.N * this.N;
    this.actualOrder = this.order.value;
  }

  init() {
    for (let i = 0; i < this.total; i++) {
      this.path[i] = this.hilbert(i);
      const lenX = this.canvas.width / this.N;
      const lenY = this.canvas.height / this.N;
      // const len = (this.canvas.width < this.canvas.height ? this.canvas.width : this.canvas.height ) / this.N
      this.path[i].x *= lenX;
      this.path[i].x += lenX / 2;
      this.path[i].y *= lenY;
      this.path[i].y += lenY / 2;
    }
  }

  drawHilbert(color, weight) {
    beginShape(this);
    this.ctx.strokeStyle = color;
    this.ctx.lineWidth = weight;
    this.ctx.moveTo(this.path[0].x, this.path[0].y);
    for (let i = 0; i < this.counter; i++) {
      if (this.path[i]) {
        this.ctx.lineTo(this.path[i].x, this.path[i].y);
      }
    }
    endShape(this, false);
    this.counter += this.velocity.value;
    if (this.counter == this.path.length || this.actualOrder != this.order.value) {
      this.counter = 0;
      this.clearProps();
      this.init();
    }
  }

  animate() {
    clear(this);
    this.canvas.style.backgroundColor = this.backgroundColor.value;
    this.drawHilbert(this.color.value, this.lineWeight.value);
    this.frame = window.requestAnimationFrame(this.animate.bind(this));
  }

  ngOnDestroy(): void {
    window.cancelAnimationFrame(this.frame);
  }

}
