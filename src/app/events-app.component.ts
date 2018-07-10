import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <nav-app></nav-app>
  <events-list></events-list>
  `
})
export class EventsAppComponent {
  title = 'app';
}
