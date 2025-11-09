import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { WeatherCardComponent } from '../weather-card/weather-card.component';
import { UnitToggleComponent } from '../unit-toggle/unit-toggle.component';
import { WeatherService, City } from '../../services/weather.service';
import { WeatherSearchComponent } from '../weather-search/weather-search.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-weather-list',
  standalone: true,
  imports: [CommonModule, WeatherCardComponent, WeatherSearchComponent, UnitToggleComponent, NavbarComponent],
  templateUrl: './weather-list.component.html',
  styleUrl: './weather-list.component.css'
})
export class WeatherListComponent implements OnInit {

  cities: City[] = [];
  allCities: City[] = [];
  filteredCities: City[] = [];

  selectedUnit: 'C' | 'F' = 'C';


  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getAllCities().subscribe({
      next: (data) => {
        this.allCities = data;
        this.filteredCities = data; 
      },
      error: (err) => {
        console.error('Error loading cities:', err);
      }
    });
  }

  onSearchChanged(event: { city: string; date: string }) {
    this.filteredCities = this.allCities
    .map(city => {
      
      const filteredForecast = city.forecast.filter(f => event.date ? f.date === event.date : true);
      if (filteredForecast.length > 0) {
        return { ...city, forecast: filteredForecast };
      }
      return null;
    })
    .filter(city => city !== null)
    .filter(city => event.city ? city!.city.toLowerCase().includes(event.city.toLowerCase()) : true) as City[];
  }

}
