import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'component3',
  templateUrl: './app.component3.html'
})
export class AppComponent3 implements OnInit {
  public myLastName: string;

  constructor() {
  }

  public ngOnInit(): void {
    this.myLastName = 'Default Value (coming from component): Eijgermans';
  }

}
