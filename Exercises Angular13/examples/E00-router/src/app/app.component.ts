// app.component.ts
import {Component} from '@angular/core';
import {City} from './shared/model/city.model';
import {CityService} from './shared/services/city.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

// Class
export class AppComponent {
  // Properties
  public cities: City[];
  public currentCity: City;

  constructor(private cityService: CityService) {
  }

  public ngOnInit(): void {
    this.getCities();
  }

  public getCity(city: City): void {
    this.currentCity = city;
  }

  public clearCity(): void {
    this.currentCity = null;
  }

  // increase or decrease rating on Event Emitted
  public updateRating(rating: number): void {
    this.currentCity.rating += rating;
  }

  //***********************
  // implementation
  //***********************
  getCities(): void {
    if (!this.cities) {
      this.cityService.getCities().subscribe(
        cityData => {
          this.cities = cityData; // 1. success handler
        },
        err => console.log(err), // 2. error handler
        () => console.log('Getting cities complete...') // 3. complete handler
      );
    }
  }
}
