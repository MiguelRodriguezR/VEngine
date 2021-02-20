import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Reasignable} from '../../entities/reasignable';
import * as p5 from 'p5';


let component = null;

@Component({
  selector: 'app-perlin-noise3d',
  templateUrl: './perlin-noise3d.component.html',
  styleUrls: ['./perlin-noise3d.component.less']
})
export class PerlinNoise3dComponent implements OnInit, OnDestroy {

  private p5;

  scale: Reasignable = new Reasignable(30, 'slide', {min: 10, max: 100});
  width: Reasignable = new Reasignable(1000, 'slide', {min: 500, max: 3000});
  height: Reasignable = new Reasignable(800, 'slide', {min: 500, max: 3000});
  noiseY: Reasignable = new Reasignable(100, 'slide', {min: 0, max: 500});
  noiseX: Reasignable = new Reasignable(-100, 'slide', {min: -200, max: 500});
  terrainOpacity: Reasignable = new Reasignable(30, 'slide', {min: 0, max: 400});
  xRotation: Reasignable = new Reasignable(30, 'slide', {min: 10, max: 100});
  backgroundColor: Reasignable = new Reasignable('#000000', 'color');
  noStroke: Reasignable = new Reasignable(false, 'checkbox');


  constructor() {
    console.log('Analog-constructed');
    window.onresize = this.onWindowResize;
    component = this;
  }

  ngOnInit() {
    console.log('analog-init');
    this.createCanvas();
  }

  ngOnDestroy(): void {
    this.destroyCanvas();
    console.log('analog-destroy');
  }

  private onWindowResize = (e) => {
    this.p5.resizeCanvas(this.p5.windowWidth, this.p5.windowHeight);
  };

  private createCanvas = () => {
    console.log('creating canvas');
    this.p5 = new p5(this.drawing);
    console.log(this.p5);
  };

  private destroyCanvas = () => {
    console.log('destroying canvas');
    this.p5.noCanvas();
    this.p5.remove();
  };

  private drawing = function (p: any) {

    let cols, rows;
    let lastCols = 0;
    let lastRows = 0;
    let scl = component.scale.value;
    let w = component.width.value;
    let h = component.height.value;

    let flying = 0;

    let terrain = [];

    let initAll = () => {
      scl = component.scale.value;
      w = component.width.value;
      h = component.height.value;

      cols = w / scl;
      rows = h / scl;

      if (cols == lastCols && rows == lastRows) return;

      lastCols = cols;
      lastRows = rows;

      for (let x = 0; x < cols; x++) {
        terrain[x] = [];
        for (let y = 0; y < rows; y++) {
          terrain[x][y] = 0;
        }
      }
    };

    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL).parent('p5canvas');
      initAll();
    };

    p.draw = () => {
      initAll();
      flying -= 0.1;
      let yoff = flying;
      for (let y = 0; y < rows; y++) {
        let xoff = 0;
        for (let x = 0; x < cols; x++) {
          terrain[x][y] = p.map(p.noise(xoff, yoff), 0, 1, component.noiseX.value, component.noiseY.value);
          xoff += 0.2;
        }
        yoff += 0.2;
      }

      p.background(component.backgroundColor.value);
      p.translate(0, 50);
      p.rotateX(p.PI / (0.1 * component.xRotation.value));
      p.fill(200, 200, 200, component.terrainOpacity.value);
      p.translate(-w / 2, -h / 2);
      for (let y = 0; y < rows - 1; y++) {
        p.beginShape(p.TRIANGLE_STRIP);
        if (component.noStroke.value) p.noStroke();
        else {
          p.strokeWeight(1);
          p.stroke(0);
        }
        for (let x = 0; x < cols; x++) {
          p.vertex(x * scl, y * scl, terrain[x][y]);
          p.vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
        }
        p.endShape();
      }
    };

  };

}
