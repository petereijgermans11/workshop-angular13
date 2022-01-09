import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'component4',
  templateUrl: './app.component4.html'
})
export class AppComponent4 implements OnInit {
  public myLastName: string;

  constructor() {
  }

  public ngOnInit(): void {
    this.myLastName = 'Default Value (coming from component): Eijgermans';
  }

  public onSubmit(form): void {
    console.log('Form submitted: ', form.value);
    alert('Form submitted!' + JSON.stringify(form.value));
    // TODO: send result to actual API/RESTful endpoint.
  }

}
