import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
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
                private toastr: ToastrService, 
                private router: ActivatedRoute) {}

    ngOnInit(): void {
       this.events = this.router.snapshot.data['event'];
    }

    handleThumbnailClick(eventName) {
        this.toastr.success(eventName); 
    }
}