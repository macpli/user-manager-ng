import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-panel',
  templateUrl: './users-panel.component.html',
  styleUrls: ['./users-panel.component.css']
})
export class UsersPanelComponent implements OnInit  {

  users: User[] = [];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((users) => this.users = users);
  }

  deleteUser(user: User){
    this.userService.deleteUser(user).
    subscribe(
      () => this.users = this.users.filter(u => u.id !== user.id));
  }

  clickButtonBack(path: string){
    this.router.navigate([path])
  }

}
