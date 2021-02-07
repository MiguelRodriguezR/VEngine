import { Injectable } from '@angular/core';
import {SinComponent} from '../visualizations/sin/sin.component';
import {MaurerRoseComponent} from "../visualizations/maurer-rose/maurer-rose.component";
import {CollatzConjectureComponent} from "../visualizations/collatz-conjecture/collatz-conjecture.component";

@Injectable({
  providedIn: 'root'
})
export class VisualizationsService {
  declared = [
    {component: CollatzConjectureComponent, name: 'Collatz Conjecture', exp:'https://en.wikipedia.org/wiki/Collatz_conjecture'},
    {component: MaurerRoseComponent, name: 'Maurer Rose', exp:'https://en.wikipedia.org/wiki/Maurer_rose'},
    {component: SinComponent, name: 'Sine', exp:'https://en.wikipedia.org/wiki/Sine'},
    ];
  actual: any = this.declared[0];

  constructor() { }
}
