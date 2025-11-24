import { Component } from '@angular/core';
import {AuthService} from '../auth.component/auth.service';


@Component({
  selector: 'app-home-cards.component',
  standalone: false,
  templateUrl: './home-cards.component.html',
  styleUrl: './home-cards.component.css',
})
export class HomeCardsComponent {

  constructor(private authService: AuthService) {}  // <-- INYECTAR SERVICIO

  logout() {
    this.authService.logout();
  }
}
