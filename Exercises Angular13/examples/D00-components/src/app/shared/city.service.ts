import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from './city.model';

@Injectable()
export class CityService {
  constructor(private http: HttpClient) {}

  // retourneer alle cities
  public getCities(): Observable<City[]> {
    return this.http.get<City[]>('assets/data/cities.json');
  }
}
