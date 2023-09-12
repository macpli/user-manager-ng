import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'User';
import { UserService } from 'src/app/services/user.service';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-user-panel',
  templateUrl: './update-user-panel.component.html',
  styleUrls: ['./update-user-panel.component.css']
})
export class UpdateUserPanelComponent implements OnInit {
  @Input() userId!: number;
  @Input() user!: User;
  @Output() onUpdateUser: EventEmitter<User> = new EventEmitter;

  name: string = '';
  email: string = '';
  id!: number;

  modalInfo = {type : 'update', isConfirmed: false}
  
  dialogConfirm: boolean = false;

  constructor(private router: Router,
              private userService: UserService,
              private modalService: NgbModal) { }

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
    
    this.onUpdateUser.emit(newUser);
    this.name ='';
    this.email ='';
    this.router.navigate(['/users']);
    
  }

  openModal() {
    const modalRef = this.modalService.open(ConfirmDialogComponent);
    modalRef.componentInstance.modalInfo = this.modalInfo;

    modalRef.result.then((result) => {
      if(result.isConfirmed) {
        this.onSubmit(this.user);
      }
    })
  }

  onReturn(path: string){
    this.router.navigate([path])
  }

}
