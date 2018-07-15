import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'events-app',
  template: `
  <nav-app></nav-app>
  <router-outlet></router-outlet>
  `
})
export class EventsAppComponent {
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.checkAuthenticationStatus();
  }
}
