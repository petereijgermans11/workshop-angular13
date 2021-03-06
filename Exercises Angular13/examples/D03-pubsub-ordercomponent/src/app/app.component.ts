// app.component.ts
import {Component, OnDestroy, OnInit} from '@angular/core';
import {City} from './shared/model/city.model';
import {CityService} from './shared/services/city.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  public title: string = 'Cities with order Component and event bus';
  public cities: City[] = [];
  public currentCity: City;
  private sub: Subscription;

  constructor(private cityService: CityService) {
  }

  public ngOnInit() {
    this.sub = this.cityService
      .getCities()
      .subscribe(
        cityData => (this.cities = cityData),
        err => console.log(err),
        () => console.log('Fetching cities complete...')
      );
  }

  public showCity(city: City): void {
    this.currentCity = city;
  }

  public clearCity(): void {
    this.currentCity = null;
  }

  public updateCityRating(rating: number): void {
    this.currentCity.rating += rating;
  }

  public ngOnDestroy(): void {
    // If subscribed, we must unsubscribe before Angular destroys the component.
    // Failure to do so could create a memory leak.
    this.sub.unsubscribe();
  }
}
