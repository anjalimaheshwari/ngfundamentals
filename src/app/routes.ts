import { Routes} from '@angular/router';
import { Error404Component } from "./errors/404.component";
import {
    EventsListComponent,
    EventDetailComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponent
} from './events/index'

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, 
        canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'events', component: EventsListComponent, 
        resolve: {event: EventListResolver} },
    { path: 'events/:id', component: EventDetailComponent,
        canActivate: [EventRouteActivator] },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: 'user', loadChildren: './user/user.module#UserModule'}
]
    