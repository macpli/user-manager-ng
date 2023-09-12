import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  @Input() public modalInfo: any;
  @Output() confirm: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {}

  onConfirm(){
    this.modalInfo.isConfirmed = true;
    this.activeModal.close(this.modalInfo);
  }

  onCancel(){
    this.modalInfo.isConfirmed = false;
    this.activeModal.close(this.modalInfo);
  }

}
