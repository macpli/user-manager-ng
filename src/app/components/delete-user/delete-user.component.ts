import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'User';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  @Input() user!: User;
  @Output() onDeleteUser: EventEmitter<User> = new EventEmitter();
  
  modalInfo = {type : 'delete', isConfirmed: false}

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {

  }

  openModal(user: any) {
    const modalRef = this.modalService.open(ConfirmDialogComponent);
    modalRef.componentInstance.modalInfo = this.modalInfo;

    modalRef.result.then((result) => {
      if(result.isConfirmed) {
       this.onDelete(user)
      }
    })
  }

  onDelete(user: any){
    console.log('in onDelete')
    this.onDeleteUser.emit(user)
  }

}
