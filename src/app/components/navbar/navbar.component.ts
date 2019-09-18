import { Component} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent  {

  constructor(private auth: AuthService) {
    auth.handleAuthentication();
  }


loging() {
  this.auth.login();
}

logout() {
  this.auth.logout();
}


}
