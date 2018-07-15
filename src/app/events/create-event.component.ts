import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/index';


@Component ({
    templateUrl: './create-event.component.html',
    styleUrls: ['./create-event.component.css']
})

export class CreateEventComponent {
    newEvent
    isDirty: boolean = true;

    constructor(private eventService: EventService, private router: Router) {}

    cancel() {
        this.router.navigate(['/events']);
    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues).subscribe(() => {
            this.isDirty = false
            this.router.navigate(['/events']) 
        });
        
    }
}