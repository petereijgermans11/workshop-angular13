// app.component.ts
import {Component, OnInit} from '@angular/core';
import {City} from './shared/city.model'
import {CityService} from "./shared/city.service";
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})

// Class
export class AppComponent implements OnInit {
  // Properties
  public cities: City[];
  public currentCity: City;
  private sub: Subscription;

  constructor(private cityService: CityService) {

  }

  public ngOnInit(): void {
    this.getCities();
  }

  public getCity(city): void {
    this.currentCity = city;
  }

  public clearCity(): void {
    this.currentCity = null;
  }

  //***********************
  // implementation
  //***********************
  public getCities(): void {
    if (!this.cities) {
      this.sub = this.cityService.getCities()
        .subscribe(cityData => {
            this.cities = cityData;				// 1. success handler
          },
          err => console.log(err),						// 2. error handler
          () => console.log('Getting cities complete...')	// 3. complete handler
        )
    }
  }

  public ngOnDestroy(): void {
    // If subscribed, we must unsubscribe before Angular destroys the component.
    // Failure to do so could create a memory leak.
    this.sub.unsubscribe();
  }
}
