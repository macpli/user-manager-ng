import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  @Output() onAddUser: EventEmitter<User> = new EventEmitter;

  name: string = '';
  email: string = ''

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {}

  onSubmit() {
    if(!this.name){
      alert('Please add a name!');
      return;
    }

    const newUser = {
      name: this.name,
      email: this.email,
    };

    this.onAddUser.emit(newUser);

    this.name ='';
    this.email ='';
  }

  clickButton(path: string) {
    this.router.navigate([path])
  }
}
