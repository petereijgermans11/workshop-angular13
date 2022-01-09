import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {City} from './shared/model/city.model';
import {CityService} from './shared/services/city.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [`.cityPhoto {
    max-width: 200px
  }`]
})

// Class
export class AppComponent implements OnInit {
  // Properties
  public currentCity: City;
  public cities: Observable<City[]>;
  public cityPhoto: string;


  constructor(private cityService: CityService) {
  }

  public ngOnInit(): void {
  }

  public loadCities(): void {
    this.cities = this.cityService.getCities();
  }

  public getCity(city: City): void {
    this.currentCity = city;
    this.cityPhoto = `assets/img/${this.currentCity.name}.jpg`;
  }

  public clear(): void {
    this.cities = null;
  }

  public clearCache(): void {
    this.cityService.clearCache();
  }
}
