import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  colorSearchTextInput = new FormControl();

  constructor(private httpClient: HttpClient) {
  }

  doColorSearch() {

  }
}
