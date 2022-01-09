import {Component} from '@angular/core';
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-login',
  template: `<a [hidden]="needsLogin()">Login</a>`
})
export class LoginComponent {

  constructor(private auth: AuthService) {
  }

  public needsLogin(): void {
    return !this.auth.isAuthenticated();
  }
}
