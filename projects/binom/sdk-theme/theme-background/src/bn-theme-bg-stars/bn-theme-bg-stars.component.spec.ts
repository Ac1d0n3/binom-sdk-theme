import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnThemeBgStarsComponent } from './bn-theme-bg-stars.component';

describe('BnThemeBgStarsComponent', () => {
  let component: BnThemeBgStarsComponent;
  let fixture: ComponentFixture<BnThemeBgStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnThemeBgStarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnThemeBgStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
