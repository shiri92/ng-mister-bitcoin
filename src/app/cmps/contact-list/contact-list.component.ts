import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Contact from '../../services/models/Contact';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() contacts: Contact;
  @Output() delete = new EventEmitter();

  ngOnInit() {
  }

  moveToDetails(contactId: string) {
    this.router.navigate([`contact/${contactId}`])
  }

  handleDelete(contact: Contact, ev: string) {
    this.delete.emit(contact);
  }
}
