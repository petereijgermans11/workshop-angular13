import { Injectable } from '@angular/core';
import { IF1Seasons, F1Seasons, F1SeasonsAPI } from 'src/app/models/f1-api';
import { IF1Season, F1Season } from 'src/app/models/f1-season-api';
import { IF1SeasonResults, F1SeasonResults } from '../models/f1-api-season-results';
import { UtilServices } from './util';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_BASE_URL = 'http://ergast.com/api/f1';
const URL_SEASONS = API_BASE_URL + '/seasons.json?limit=100';
// const API_ASSET1 =  'assets/data/f1-seasons.json';
// const API_ASSET2 = 'assets/data/f1-2021.json';

@Injectable({
  providedIn: 'root'
})

export class ServiceErgastF1 {
  private _http: HttpClient;

  constructor(http: HttpClient) {
    this._http = http;
  }

  public getSeasons(): Observable<F1Seasons> {
    var result:any = this._http.get<F1SeasonsAPI>(URL_SEASONS).pipe(
      map((data:F1SeasonsAPI) => { return UtilServices.ConvertF1SeasonsApi(data)})
      );
    return result;
  }

  public getSeason(season: string): Observable<F1Season> {
    return this._http.get<F1Season>(API_BASE_URL + `/${season}/results.json?limit=1000`);
  }

  public getSeasonResults(season: string): Observable<F1SeasonResults> {
    // f1/2021/driverStandings.json
    return this._http.get<F1SeasonResults>(API_BASE_URL + `/${season}/driverStandings.json`);
  }
}
