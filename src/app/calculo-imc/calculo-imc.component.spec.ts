import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoIMCComponent } from './calculo-imc.component';

describe('CalculoIMCComponent', () => {
  let component: CalculoIMCComponent;
  let fixture: ComponentFixture<CalculoIMCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculoIMCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculoIMCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
