import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Contact from '../../services/models/Contact';


@Component({
  selector: 'app-transfer-funds',
  templateUrl: './transfer-funds.component.html',
  styleUrls: ['./transfer-funds.component.scss']
})
export class TransferFundsComponent implements OnInit {

  constructor() { }

  @Output() transfer = new EventEmitter();
  @Input() contact: Contact;
  amount: number;

  ngOnInit() {
  }

  setAmount(ev) {
    this.amount = ev.target.value;
  }

  handleTransfer() {
    this.transfer.emit(this.amount);
  }
}
