import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
@Component({
  selector: 'nav-app',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent{
  constructor(private auth: AuthService) {}
}
