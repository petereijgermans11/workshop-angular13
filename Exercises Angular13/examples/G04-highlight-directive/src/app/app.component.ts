import {Component, OnInit} from '@angular/core';
import {City} from './shared/model/city.model';
import {CityService} from './shared/services/city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  // Properties
  public cities: City[];

  constructor(private cityService: CityService) {
  }

  public ngOnInit(): void {
    this.getCities();
  }

  // ***********************
  // implementation
  // ***********************
  public getCities(): void {
    if (!this.cities) {
      this.cityService.getCities()
        .subscribe(cityData => this.cities = cityData);
    }
  }
}
