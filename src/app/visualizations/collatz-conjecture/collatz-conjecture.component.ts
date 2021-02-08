import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {beginShape, clear, endShape, initCanvas, toRadians} from '../../shared/functions';
import {Reasignable} from "../../entities/reasignable";

@Component({
  selector: 'app-collatz-conjecture',
  templateUrl: './collatz-conjecture.component.html',
  styleUrls: ['./collatz-conjecture.component.less']
})
export class CollatzConjectureComponent implements OnInit, AfterViewInit, OnDestroy {

  canvas: HTMLCanvasElement;
  frame = null;
  ctx: any;

  len: Reasignable = new Reasignable(12, 'slide', {min: 0, max: 60});
  angle: Reasignable = new Reasignable(6, 'slide', {min: 0, max: 360});
  lineWeight: Reasignable = new Reasignable(1.5, 'slide', {min: 1, max: 10});
  routes: Reasignable = new Reasignable(100, 'slide', {min: 50, max: 3000, message: 'WARNING: this option can considerably affect your device performance'});
  color: Reasignable = new Reasignable('rgb(17,78,9)', 'color');



  constructor() {
  }

  ngOnInit(): void {
    initCanvas(this);

  }

  ngAfterViewInit(): void {
    this.frame = window.requestAnimationFrame(this.animate.bind(this));
  }

  drawCollatz(color, weight) {
    this.ctx.resetTransform();
    this.ctx.globalAlpha = 0.2;
    this.ctx.lineWidth = weight;
    for (let i = 1; i < this.routes.value; i++) {
      const sequence: Array<number> = [];
      let n = i;
      do {
        sequence.push(n);
        n = this.collatz(n);
      } while (n !== 1);
      sequence.push(1);
      sequence.reverse();
      this.ctx.resetTransform();
      this.ctx.translate(this.canvas.width / 2, this.canvas.height);
      for (let j = 1; j < sequence.length; j++) {
        const value = sequence[j];
        beginShape(this);
        this.ctx.rotate(toRadians(value % 2 === 0 ? this.angle.value : -this.angle.value));
        this.ctx.moveTo(0, 0);
        this.ctx.strokeStyle = color;
        this.ctx.lineTo(0, -this.len.value);
        this.ctx.translate(0, -this.len.value);
        endShape(this);
      }
    }
  }

  collatz(n) {
    return n % 2 === 0 ? n / 2 : (n * 3 + 1) / 2;
  }

  animate() {
    clear(this);
    this.drawCollatz(this.color.value, this.lineWeight.value);
    this.frame = window.requestAnimationFrame(this.animate.bind(this));
  }

  ngOnDestroy(): void {
    window.cancelAnimationFrame(this.frame);
  }


}
