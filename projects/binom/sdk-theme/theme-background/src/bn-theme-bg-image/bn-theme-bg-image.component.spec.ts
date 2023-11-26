import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnThemeBgImageComponent } from './bn-theme-bg-image.component';

describe('BnThemeBgImageComponent', () => {
  let component: BnThemeBgImageComponent;
  let fixture: ComponentFixture<BnThemeBgImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnThemeBgImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnThemeBgImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
