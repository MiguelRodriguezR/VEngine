import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Reasignable} from '../../entities/reasignable';
import {clear, drawPoint, initCanvas} from '../../shared/functions';

@Component({
  selector: 'app-sin',
  templateUrl: './sin.component.html',
  styleUrls: ['./sin.component.less']
})
export class SinComponent implements OnInit, AfterViewInit, OnDestroy {

  gap = 0;
  velocity: Reasignable = new Reasignable(1, 'number');
  frequency: Reasignable = new Reasignable(100, 'number');
  amplitude: Reasignable = new Reasignable(100, 'number');
  canvas: HTMLCanvasElement;
  frame = null;
  ctx: any;

  constructor() {
  }

  ngOnInit(): void {
    console.log(document.querySelectorAll('canvas'));
    initCanvas(this);
  }

  ngAfterViewInit(): void {
    this.frame = window.requestAnimationFrame(this.animate.bind(this));
  }

  clear(color) {
    clear(this, color);
  }

  drawPoint(x, y, color) {
    drawPoint(this, x, y, color);
  }

  drawSen(color) {
    for (let x = 0; x < this.canvas.width; x++) {
      const y =
        Math.sin((x + this.gap) / this.frequency.value) * this.amplitude.value +
        Math.floor(this.canvas.height / 2);
      this.drawPoint(x, y, color);
    }
  }

  animate() {
    // console.log(this);
    this.clear('white');
    this.drawSen('white');
    this.gap += this.velocity.value;
    this.frame = window.requestAnimationFrame(this.animate.bind(this));
  }

  ngOnDestroy(): void {
    window.cancelAnimationFrame(this.frame);
  }


}
