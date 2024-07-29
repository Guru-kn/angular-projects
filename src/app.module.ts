import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {provideHttpClient} from "@angular/common/http";
import {AppComponent} from "./app/app.component";
import {AuthButtonComponent} from "./auth/auth.component";
import {AuthGuard, AuthModule, provideAuth0} from "@auth0/auth0-angular";
import {AUTH0_CONFIG, AuthConfigService} from "./auth/auth.service";
import {environment} from "./environment";
import {AuthCallbackComponent} from "./callback/callback.component";
import {LoginButtonComponent} from "./app/login-button/login-button.component";
import {LogoutButtonComponent} from "./app/logout-button/logout-button.component";
import {LogoutCompleteComponent} from "./app/logout-complete/logout-complete.component";

const routes: Routes = [
  {path: "", component: AuthButtonComponent, pathMatch: "full"},
  {path: "home", component: HomeComponent, pathMatch: "full",canActivate: [AuthGuard]},
  {path: "callback", component: AuthCallbackComponent, pathMatch: "full"},
  {path: "logged-out", component: LogoutCompleteComponent, pathMatch: "full"},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: false}),
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      domain: environment.auth.domain,
      clientId: environment.auth.clientId,
      authorizationParams: {
        redirect_uri: environment.auth.redirectUri
      }
    })
  ],
  exports: [
    HomeComponent
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AuthButtonComponent,
    AuthCallbackComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    LogoutCompleteComponent
  ],
  providers: [
    provideHttpClient(),
    {
      provide: AUTH0_CONFIG,
      useValue: {
        domain: environment.auth.domain,
        clientId: environment.auth.clientId,
        authorizationParams: {
          redirect_uri: environment.auth.redirectUri
        }
      }
    },
    AuthConfigService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule {
}
