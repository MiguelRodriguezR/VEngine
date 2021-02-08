import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SinComponent } from './visualizations/sin/sin.component';
import {MatInputModule} from '@angular/material/input';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MaurerRoseComponent } from './visualizations/maurer-rose/maurer-rose.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from "@angular/material/button";
import { CollatzConjectureComponent } from './visualizations/collatz-conjecture/collatz-conjecture.component';
import { HilbertCurveComponent } from './visualizations/hilbert-curve/hilbert-curve.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SideBarComponent,
    SinComponent,
    MaurerRoseComponent,
    CollatzConjectureComponent,
    HilbertCurveComponent,
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatSliderModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatTooltipModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
