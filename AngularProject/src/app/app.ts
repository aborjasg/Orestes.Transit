import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WeatherForecast } from "./components/weather-forecast/weather-forecast";
import { Customers } from "./components/customers/customers";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WeatherForecast, Customers],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {  
  list: any[] = [];
  protected readonly title = signal('Orestes.Simulator');
  
}
