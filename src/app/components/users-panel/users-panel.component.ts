import { outputAst } from '@angular/compiler';
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
  
  @Output() users: User[] = [];

  tglState: boolean = true;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((users) => this.users = users);
  }

  updateUser(user: User){
    console.log('in updateUser ', user.name, user.id);
    this.userService.updateUser(user).subscribe();
  }

  deleteUser(user: User){
    console.log('in deleteUser ', user.name, user.id);
    this.userService.deleteUser(user).
    subscribe(
      () => this.users = this.users.filter(u => u.id !== user.id));
  }

  onTglUpdate(boolean: Boolean){
    if(boolean == true){
      this.tglState = false;
      console.log("show user panel: " + this.tglState)
      return this.tglState
    }else
    this.tglState = true
    console.log("show user panel: " + this.tglState)
    return this.tglState;
  }

  clickBtnBack(path: string){
    this.router.navigate([path])
  }

  clickBtnAdd(path: string){
    this.router.navigate([path]);
  }

}
