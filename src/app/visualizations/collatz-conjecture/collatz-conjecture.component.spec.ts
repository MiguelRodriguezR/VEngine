import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollatzConjectureComponent } from './collatz-conjecture.component';

describe('CollatzConjectureComponent', () => {
  let component: CollatzConjectureComponent;
  let fixture: ComponentFixture<CollatzConjectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollatzConjectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollatzConjectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
