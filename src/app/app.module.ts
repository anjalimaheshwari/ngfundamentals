import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsAppComponent } from './events-app.component';
import { NavComponent } from './nav/nav.component';
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

import {
  TOASTR_TOKEN,
  CollapsibleWellComponent,
  IToastr,
  JQ_TOKEN,
  SimpleModalComponent,
  ModalTriggerDirective
} from './common/index'

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
    SimpleModalComponent,
    ModalTriggerDirective,
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
    { provide: JQ_TOKEN ,useValue: jQuery},
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
