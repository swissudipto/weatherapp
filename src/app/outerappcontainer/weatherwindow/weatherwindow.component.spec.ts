import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherwindowComponent } from './weatherwindow.component';

describe('WeatherwindowComponent', () => {
  let component: WeatherwindowComponent;
  let fixture: ComponentFixture<WeatherwindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherwindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
