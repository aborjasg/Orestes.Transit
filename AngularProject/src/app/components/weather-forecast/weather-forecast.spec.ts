import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecast } from './weather-forecast';

describe('WeatherForecast', () => {
  let component: WeatherForecast;
  let fixture: ComponentFixture<WeatherForecast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherForecast]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherForecast);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
