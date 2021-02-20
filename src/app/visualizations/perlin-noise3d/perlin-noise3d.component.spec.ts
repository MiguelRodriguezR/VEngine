import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerlinNoise3dComponent } from './perlin-noise3d.component';

describe('PerlinNoise3dComponent', () => {
  let component: PerlinNoise3dComponent;
  let fixture: ComponentFixture<PerlinNoise3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerlinNoise3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerlinNoise3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
