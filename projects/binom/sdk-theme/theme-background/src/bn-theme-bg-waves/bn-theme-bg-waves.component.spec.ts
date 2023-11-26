import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnThemeBgWavesComponent } from './bn-theme-bg-waves.component';

describe('BnThemeBgWavesComponent', () => {
  let component: BnThemeBgWavesComponent;
  let fixture: ComponentFixture<BnThemeBgWavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnThemeBgWavesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnThemeBgWavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
