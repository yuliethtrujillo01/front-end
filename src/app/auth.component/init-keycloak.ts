import { KeycloakService } from 'keycloak-angular';

export function initKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/',
        realm: 'master',
        clientId: 'front-ova-client'
      },
      initOptions: {
        onLoad: 'login-required',

      }
    });
}
