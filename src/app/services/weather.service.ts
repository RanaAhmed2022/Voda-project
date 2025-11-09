import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Forecast {
  date: string;
  temperatureCelsius: number;
  temperatureFahrenheit: number;
  humidity: number;
}

export interface City {
  id: number;
  city: string;
  forecast: Forecast[];
}


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = 'http://localhost:4454';


  constructor(private http: HttpClient) { }

  getAllCities(): Observable<City[]> {
    return this.http.get<City[]>(`${this.apiUrl}/forecast`);
  }

  getCityById(cityId: number): Observable<City> {
    return this.http.get<City>(`${this.apiUrl}/cityForecast/${cityId}`);
  }
}
