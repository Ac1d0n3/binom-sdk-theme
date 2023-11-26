import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnThemeBgGradientComponent } from './bn-theme-bg-gradient.component';

describe('BnThemeBgGradientComponent', () => {
  let component: BnThemeBgGradientComponent;
  let fixture: ComponentFixture<BnThemeBgGradientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnThemeBgGradientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnThemeBgGradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
