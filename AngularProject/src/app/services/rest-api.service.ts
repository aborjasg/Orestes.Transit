import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  private apiURL_base = 'http://localhost:5062';
  private apiURL_WeatherForecast = `${this.apiURL_base}/api/WeatherForecast`;
  private apiURL_Customers = `${this.apiURL_base}/api/Customers`;

  constructor(private http: HttpClient) {}

  getWeatherForecast(): Observable<any> {
    let headers = new HttpHeaders().set('access-control-allow-origin', this.apiURL_base);

    return this.http.get(this.apiURL_WeatherForecast, {headers});
  }

  getCustomers(): Observable<any> {
    let headers = new HttpHeaders().set('access-control-allow-origin', this.apiURL_base);

    return this.http.get(this.apiURL_Customers, {headers});
  }

}