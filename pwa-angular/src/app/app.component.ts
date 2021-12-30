import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pwa-angular';
  tituloText = 'Bienvenido a Angular';

  constructor(public authenticationService: AuthenticationService) { }

  logout() {
    this.authenticationService.logout();
  }
}