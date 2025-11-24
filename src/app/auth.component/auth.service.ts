import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  logout() {
    const keycloakUrl = 'http://localhost:8080/realms/master/protocol/openid-connect/logout';
    const redirectUri = 'http://localhost:4200/login';

    window.location.href = `${keycloakUrl}?redirect_uri=${encodeURIComponent(redirectUri)}`;
  }
}
