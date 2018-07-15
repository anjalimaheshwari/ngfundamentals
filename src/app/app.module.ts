import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsAppComponent } from './events-app.component';
import { NavComponent } from './nav/nav.component';
import { appRoutes } from './routes';
import { RouterModule } from '../../node_modules/@angular/router';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { HttpClientModule } from '@angular/common/http';
 

let toastr: IToastr = window['toastr'];
let jQuery = window['$'];

import {
  EventService,
  EventDetailComponent,
  EventThumbnail,
  EventsListComponent,
  EventListResolver,
  CreateEventComponent,
  CreateSessionComponent,
  SessionListComponent,
  UpvoteComponent,
  DurationPipe,
  VoterService,
  LocationValidator,
  EventResolver
} from './events/index'

import {
  TOASTR_TOKEN,
  CollapsibleWellComponent,
  IToastr,
  JQ_TOKEN,
  SimpleModalComponent,
  ModalTriggerDirective,
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
    UpvoteComponent,
    LocationValidator, 
    DurationPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    EventService, 
    { provide: TOASTR_TOKEN, useValue: toastr},
    { provide: JQ_TOKEN ,useValue: jQuery},
    EventResolver,
    {provide: 'canDeactivateCreateEvent', 
    useValue: checkDirtyState },
    EventListResolver,
    AuthService,
    VoterService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you wish to proceed?');
return true;

}
