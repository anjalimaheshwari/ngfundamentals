import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession } from '../events/shared/event.model';
import { EventService } from '../events/shared/event.service';
@Component({
  selector: 'nav-app',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent{
  searchTerm: string="";
  foundSessions: ISession[];

  constructor(private auth: AuthService, private eventService: EventService) {}

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(
        sessions => {this.foundSessions = sessions;
        }
    )
  }
}
