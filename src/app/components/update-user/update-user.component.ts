import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userId = Number(this._route.snapshot.paramMap.get('id?'));

  constructor(private _route: ActivatedRoute,
              private userService: UserService,) { }

  ngOnInit(): void {
  }

  updateUser(user: User){
    console.log('in updateUser ', user.name, user.id);
    this.userService.updateUser(user).subscribe();
  }
}
