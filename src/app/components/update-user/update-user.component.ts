import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
@Input() user!: User;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }
  
  clickButtonUpdate(path: string) {
    this.router.navigate([path]);
  }

}
