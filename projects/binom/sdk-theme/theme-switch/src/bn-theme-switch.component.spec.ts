import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnThemeSwitchComponent } from './bn-theme-switch.component';

describe('BnThemeSwitchComponent', () => {
  let component: BnThemeSwitchComponent;
  let fixture: ComponentFixture<BnThemeSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnThemeSwitchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnThemeSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
