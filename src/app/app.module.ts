import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsAppComponent } from './events-app.component';
import { NavComponent } from './nav/nav.component';
import { TOASTR_TOKEN, IToastr, JQ_TOKEN, CollapsibleWellComponent } from './common/index';
import { appRoutes } from './routes';
import { RouterModule } from '../../node_modules/@angular/router';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';

let toastr: IToastr = window['toastr'];
let jQuery = window['$'];

import {
  EventService,
  EventDetailComponent,
  EventThumbnail,
  EventsListComponent,
  EventRouteActivator,
  EventListResolver,
  CreateEventComponent,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from './events/index'


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnail,
    NavComponent, 
    EventDetailComponent, 
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventService, 
    { provide: TOASTR_TOKEN, useValue: toastr},
    EventRouteActivator,
    {provide: 'canDeactivateCreateEvent', 
    useValue: checkDirtyState },
    EventListResolver,
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you wish to proceed?');
return true;

}
