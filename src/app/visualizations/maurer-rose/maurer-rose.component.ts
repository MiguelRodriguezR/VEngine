import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {beginShape, clear, drawPoint, endShape, initCanvas, toRadians} from "../../shared/functions";
import {Reasignable} from "../../entities/reasignable";

@Component({
  selector: 'app-maurer-rose',
  templateUrl: './maurer-rose.component.html',
  styleUrls: ['./maurer-rose.component.less']
})
export class MaurerRoseComponent implements OnInit, AfterViewInit, OnDestroy {

  n: Reasignable = new Reasignable(2, 'number', {message: 'The rose has n petals if n is odd, and 2n petals if n is even.'});
  d: Reasignable = new Reasignable(29, 'number', {message: 'factor d on degrees'});
  radius: Reasignable = new Reasignable(250, 'slide', {min: 50, max: 600});
  trackWeight: Reasignable = new Reasignable(3, 'number');
  maurerWeight: Reasignable = new Reasignable(1, 'number');
  maurerColor: Reasignable = new Reasignable('black', 'color');
  trackColor: Reasignable = new Reasignable('#0000FF', 'color');
  showTrack: Reasignable = new Reasignable(true, 'checkbox');
  canvas: HTMLCanvasElement;
  frame = null;
  ctx: any;

  constructor() {
  }

  ngOnInit(): void {
    initCanvas(this);
  }

  ngAfterViewInit(): void {
    this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
    this.frame = window.requestAnimationFrame(this.animate.bind(this));
  }

  drawMaurer(track = false, color, weight) {
    beginShape(this);
    this.ctx.strokeStyle = color;
    this.ctx.lineWidth = weight;
    for (let i = 0; i < 361; i++) {
      const k = track ? i : i * this.d.value;
      const r = this.radius.value * Math.sin(toRadians(this.n.value * k));
      const x = r * Math.cos(toRadians(k));
      const y = r * Math.sin(toRadians(k));
      this.ctx.lineTo(x, y);
    }
    endShape(this);
  }

  animate() {
    clear(this);
    this.drawMaurer(false, this.maurerColor.value, this.maurerWeight.value);
    if (this.showTrack.value) {
      this.drawMaurer(true, this.trackColor.value, this.trackWeight.value);
    }
    this.frame = window.requestAnimationFrame(this.animate.bind(this));
  }

  ngOnDestroy(): void {
    window.cancelAnimationFrame(this.frame);
  }


}
