import { EventsListComponent } from "./events/events-list.component";
import { EventDetailComponent } from "./events/event-details/event-details.component";
import { Routes} from '@angular/router';
import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from "./errors/404.component";
import { EventRouteActivator } from "./events/event-details/event-route-activate.service";
import { EventListResolver} from "./events/events-list-resolver.service";

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, 
        canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'events', component: EventsListComponent, 
        resolve: {events: EventListResolver} },
    { path: 'events/:id', component: EventDetailComponent,
        canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/events', pathMatch: 'full'}
]