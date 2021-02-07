import {
  AfterViewInit,
  Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {VisualizationsService} from "../../services/visualizations.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit, AfterViewInit {

  @ViewChild('visualizationContainer', {read: ViewContainerRef}) visualizationContainer;
  actualRef = null;
  loading = false;

  constructor(private vs: VisualizationsService,
              private resolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.createVisualization();
  }

  createVisualization() {
    // console.log(this.actualRef);
    if (this.actualRef) {
      const ref = this.actualRef;
      setTimeout(() => {
        ref.destroy();
        this.loading = false;
      }, 50);
    }
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(this.vs.actual.component);
    const componentRef: ComponentRef<any> = this.visualizationContainer.createComponent(factory);
    this.actualRef = componentRef;
    // console.log(this.vs);
  }

  changeActualRef(ref) {
    this.loading = true;
    this.vs.actual = this.vs.declared.find(v => v.name == ref);
    this.createVisualization();
  }

  get _vs() {
    return this.vs;
  }

}
