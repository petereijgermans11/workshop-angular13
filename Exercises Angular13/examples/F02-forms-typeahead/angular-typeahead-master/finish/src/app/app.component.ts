import {Component} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {debounceTime, map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {FormControl} from '@angular/forms';

import {Color} from './models/Color';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  colorSearchTextInput = new FormControl();

  searchColor$ = new BehaviorSubject<string>('');

  colors$: Observable<string[]> = this.searchColor$.pipe(
    debounceTime(500),
    switchMap(searchColorText => {
      return this.httpClient
        .get<Color[]>('http://localhost:4250/colors?name_like=' + searchColorText);
    }),
    map((colors: Color[]) => colors.map(color => color.name)),
  );

  constructor(private httpClient: HttpClient) {
  }

  doColorSearch() {
    this.searchColor$.next(this.colorSearchTextInput.value);
  }
}
