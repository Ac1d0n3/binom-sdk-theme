import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnThemeBgCssClassComponent } from './bn-theme-bg-css-class.component';

describe('BnThemeBgCssClassComponent', () => {
  let component: BnThemeBgCssClassComponent;
  let fixture: ComponentFixture<BnThemeBgCssClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnThemeBgCssClassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnThemeBgCssClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
