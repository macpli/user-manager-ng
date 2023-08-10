import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clickButtonUpdate(path: string) {
    this.router.navigate([path])
  }

}
