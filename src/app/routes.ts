import { EventsListComponent } from "./events/events-list.component";
import { EventDetailComponent } from "./events/event-details/event-details.component";
import { Routes} from '@angular/router';

export const appRoutes: Routes = [
    { path: 'events', component: EventsListComponent},
    { path: 'events/:id', component: EventDetailComponent},
    { path: '', redirectTo: '/events', pathMatch: 'full'}
]