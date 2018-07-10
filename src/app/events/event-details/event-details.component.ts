import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';


@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container {
            padding-left: 20px;
            padding-right: 20px;
        }

        .event-image {
            height: 100px;
        }
    `]
})

export class EventDetailComponent implements OnInit {
    event:any
    constructor (private eventService: EventService) {}

    ngOnInit() : void {
        this.event = this.eventService.getEvent(1);
    }
}