import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styles: [],
})
export class LoginButtonComponent implements OnInit {
  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auth.user$.subscribe((user: any) => {
      if(user){
        console.log('User Profile:', user);
        this.router.navigate(['/home']);
      }
    });
  }

  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }
}
