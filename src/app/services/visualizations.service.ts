import { Injectable } from '@angular/core';
import {SinComponent} from '../visualizations/sin/sin.component';
import {MaurerRoseComponent} from "../visualizations/maurer-rose/maurer-rose.component";
import {CollatzConjectureComponent} from "../visualizations/collatz-conjecture/collatz-conjecture.component";
import {HilbertCurveComponent} from "../visualizations/hilbert-curve/hilbert-curve.component";
import {PerlinNoise3dComponent} from "../visualizations/perlin-noise3d/perlin-noise3d.component";

@Injectable({
  providedIn: 'root'
})
export class VisualizationsService {
  declared = [
    {component: PerlinNoise3dComponent, name: 'Perlin Noise 3d', exp:'https://en.wikipedia.org/wiki/Perlin_noise'},
    {component: HilbertCurveComponent, name: 'Hilbert Curve', exp:'https://en.wikipedia.org/wiki/Hilbert_curve'},
    {component: CollatzConjectureComponent, name: 'Collatz Conjecture', exp:'https://en.wikipedia.org/wiki/Collatz_conjecture'},
    {component: MaurerRoseComponent, name: 'Maurer Rose', exp:'https://en.wikipedia.org/wiki/Maurer_rose'},
    {component: SinComponent, name: 'Sine', exp:'https://en.wikipedia.org/wiki/Sine'},
    ];
  actual: any = this.declared[0];

  constructor() { }
}
