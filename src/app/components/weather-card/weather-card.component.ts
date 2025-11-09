import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { City } from './../../services/weather.service';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css'
})
export class WeatherCardComponent {

  @Input() city!: City;
  @Input() unit: 'C' | 'F' = 'C';

}
