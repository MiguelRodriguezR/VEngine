import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaurerRoseComponent } from './maurer-rose.component';

describe('MaurerRoseComponent', () => {
  let component: MaurerRoseComponent;
  let fixture: ComponentFixture<MaurerRoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaurerRoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaurerRoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
