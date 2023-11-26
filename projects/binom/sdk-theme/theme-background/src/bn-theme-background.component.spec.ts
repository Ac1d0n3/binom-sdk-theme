import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnThemeBackgroundComponent } from './bn-theme-background.component';

describe('BnThemeBackgroundComponent', () => {
  let component: BnThemeBackgroundComponent;
  let fixture: ComponentFixture<BnThemeBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnThemeBackgroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnThemeBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
