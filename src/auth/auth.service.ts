import {Inject, Injectable, InjectionToken} from '@angular/core';
import {AuthService, provideAuth0} from '@auth0/auth0-angular';
import {environment} from "../environment";

export interface Auth0Config {
  domain: string;
  clientId: string;
  authorizationParams: {
    redirect_uri: string
  }
}

export const AUTH0_CONFIG = new InjectionToken<Auth0Config>('auth0.config');

@Injectable({
  providedIn: 'root'
})
export class AuthConfigService {
  private config: Auth0Config;

  constructor(@Inject(AUTH0_CONFIG) private auth0Config: Auth0Config) {
    this.config = auth0Config;
  }

  getConfig(): Auth0Config {
    return this.config;
  }
}
