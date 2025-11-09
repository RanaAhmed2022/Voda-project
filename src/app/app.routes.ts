import { Routes } from '@angular/router';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },         
    { path: 'weather', component: WeatherListComponent }, 
    { path: '**', redirectTo: '' }   
];
