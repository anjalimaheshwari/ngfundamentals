import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <nav-app></nav-app>
  <router-outlet></router-outlet>
  `
})
export class EventsAppComponent {
  title = 'app';
}
