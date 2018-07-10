import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { ProfileComponent} from './profile.component';
import { LoginComponent } from './login.component';

@NgModule({
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(userRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    providers: []
})

export class UserModule {

}