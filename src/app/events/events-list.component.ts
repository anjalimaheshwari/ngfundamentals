import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { IEvent } from './shared/index';

declare let toastr

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
    events: IEvent;

    constructor (private eventService: EventService, 
                private router: ActivatedRoute) {}

    ngOnInit(): void {
       this.events = this.router.snapshot.data['event'];
    }
 
}