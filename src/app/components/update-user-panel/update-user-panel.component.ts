import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'User';

@Component({
  selector: 'app-update-user-panel',
  templateUrl: './update-user-panel.component.html',
  styleUrls: ['./update-user-panel.component.css']
})
export class UpdateUserPanelComponent implements OnInit {
@Input() user!: User;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clickButtonBack(path: string){
    this.router.navigate([path])
  }

}
