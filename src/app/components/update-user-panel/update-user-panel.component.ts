import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'User';

@Component({
  selector: 'app-update-user-panel',
  templateUrl: './update-user-panel.component.html',
  styleUrls: ['./update-user-panel.component.css']
})
export class UpdateUserPanelComponent implements OnInit {
  @Input() user!: User;
  @Input() users!: User[];
  @Output() onUpdateUser: EventEmitter<User> = new EventEmitter;
  @Output() onTglUpdate: EventEmitter<Boolean> = new EventEmitter;

  name: string = '';
  email: string = '';
  id!: number;

  tglState: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
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
