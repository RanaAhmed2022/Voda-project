import { Component, EventEmitter, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weather-search.component.html',
  styleUrl: './weather-search.component.css'
})
export class WeatherSearchComponent {

  @Output() searchChanged = new EventEmitter<{ city: string; date: string }>();

  city: string = '';
  date: string = '';


  onSearch() {
    this.searchChanged.emit({ city: this.city, date: this.date });
  }

}
