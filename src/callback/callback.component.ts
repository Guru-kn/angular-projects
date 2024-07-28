import {Component} from "@angular/core";
import {AuthService} from "@auth0/auth0-angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrl: './callback.component.scss'
})
export class AuthCallbackComponent {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.handleAuthCallback();
  }

  private handleAuthCallback(): void {
    console.log("handleAuthCallback")
    this.auth.idTokenClaims$.subscribe((idToken: any) => {
      if (idToken) {
        // Handle the ID token or other Auth0 response data here
        console.log('ID Token:', idToken);

        // You can also get other data like access token or user profile
        this.auth.user$.subscribe((user: any) => {
          if (user) {
            console.log('User Profile:', user);
            this.router.navigate(['/home']);
          }
        });

        // Navigate to the desired route after handling the callback
        this.router.navigate(['/']);
      }
    });
  }
}
