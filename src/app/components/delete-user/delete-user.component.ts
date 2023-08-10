import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'User';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  @Input() user!: User;

  @Output() onDeleteUser: EventEmitter<User> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {

  }

  onDelete(user: any){
    this.onDeleteUser.emit(user)
  }

}
