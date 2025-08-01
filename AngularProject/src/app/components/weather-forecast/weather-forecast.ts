import { Component } from '@angular/core';
import { RestApiService } from '../../services/rest-api.service';

@Component({
  selector: 'app-weather-forecast',
  imports: [],
  templateUrl: './weather-forecast.html',
  styleUrl: './weather-forecast.css'
})
export class WeatherForecast {
  list: any[] = [];
  constructor(private api: RestApiService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.api.getWeatherForecast().subscribe(data => {
      this.list = data;
    });
  }
}
