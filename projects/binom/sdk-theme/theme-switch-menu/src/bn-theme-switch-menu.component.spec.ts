import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnThemeSwitchMenuComponent } from './bn-theme-switch-menu.component';

describe('BnThemeSwitchMenuComponent', () => {
  let component: BnThemeSwitchMenuComponent;
  let fixture: ComponentFixture<BnThemeSwitchMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnThemeSwitchMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnThemeSwitchMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
