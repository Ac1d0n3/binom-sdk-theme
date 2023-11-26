import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeDemoComponent } from './theme-demo.component';

describe('ThemeDemoComponent', () => {
  let component: ThemeDemoComponent;
  let fixture: ComponentFixture<ThemeDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
