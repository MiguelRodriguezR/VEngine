import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Reasignable} from '../../entities/reasignable';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.less']
})
export class SideBarComponent implements OnInit, AfterViewInit {

  @Input() visualization;
  @Input() title;
  @Input() linkExp;
  params = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.params = Object.entries(this.visualization.instance).filter(e => e[1] instanceof Reasignable);
    // this.params[0][1].value = 20;
    // console.log(this.params);
    // console.log(this.visualization);
  }

  fieldChange(e, field) {
    if (field[1].type == 'number') {
      field[1].value = Number(e.target.value);
    }
    if (field[1].type == 'color') {
      field[1].value = e.target.value;
    }
    if (field[1].type == 'slide') {
      field[1].value = e.value;
    }
    if (field[1].type == 'checkbox') {
      field[1].value = e.checked;
    }
  }

}
