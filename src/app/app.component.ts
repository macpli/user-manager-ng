import { Component } from '@angular/core';
import { User } from 'User';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User Manager';
  // users: User[] = [];
  // constructor(private userService: UserService){}

  // addUser(user: User){
  //   this.userService.addUser(user).subscribe((user) => (this.users.push(user)));
  // }
}
