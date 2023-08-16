import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user-panel',
  templateUrl: './update-user-panel.component.html',
  styleUrls: ['./update-user-panel.component.css']
})
export class UpdateUserPanelComponent implements OnInit {
  @Input() user!: User;
  @Input() users!: User[];
  @Output() onUpdateUser: EventEmitter<User> = new EventEmitter;

  name: string = '';
  email: string = '';
  id!: number;

  tglState: boolean = false;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((users) => this.users = users);
  }

  onSubmit(user: any) {
    const newUser = {
      name: this.name,
      email: this.email,
      id: this.user.id
    };

    this.name ='';
    this.email ='';
    console.log('update-user-panel: in OnSubmit');
    this.onUpdateUser.emit(newUser);
  }

  tglUpdate(){
    if(this.tglState == false){
      return this.tglState = true;
    }else return this.tglState = false;
  }

  clickButtonBack(path: string){
    this.router.navigate([path])
  }

}
