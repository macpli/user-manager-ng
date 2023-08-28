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
  @Input() userId!: number;
  @Input() user!: User;
  @Input() users!: User[];
  @Output() onUpdateUser: EventEmitter<User> = new EventEmitter;
  @Output() onTglUpdate: EventEmitter<Boolean> = new EventEmitter;

  name: string = '';
  email: string = '';
  id!: number;

  tglState: boolean = false;

  constructor(private router: Router,
              private userService: UserService,) { }

  ngOnInit(): void { 
    this.getSingleUser(this.userId);
  }
  
  getSingleUser(id: number){
    this.userService.getSingleUser(this.userId).subscribe((user) => {
      this.user = user;
      this.name = this.user.name;
      this.email = this.user.email;
      console.log(this.user);

    });
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
      this.tglState = true;
      console.log(this.tglState)
      this.onTglUpdate.emit(this.tglState)
      return this.tglState
    }else
    this.tglState = false
    this.onTglUpdate.emit(this.tglState)
    return this.tglState;
  }

  clickButtonBack(path: string){
    this.router.navigate([path])
  }

}
