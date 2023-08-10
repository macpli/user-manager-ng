import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 
  ngOnInit() {}

  users: User[] = [];
  constructor(private userService: UserService){}

  addUser(user: User){
    this.userService.addUser(user).subscribe((user) => (this.users.push(user)));
    console.log('add-user: in addUser');

  }

}

