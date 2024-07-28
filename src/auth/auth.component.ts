import {AuthService} from "@auth0/auth0-angular";
import {Component} from "@angular/core";
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-auth-button',
  templateUrl: 'auth.component.html',
})
export class AuthButtonComponent {
  // Inject the authentication service into your component through the constructor
  constructor(public auth: AuthService) {}
}
