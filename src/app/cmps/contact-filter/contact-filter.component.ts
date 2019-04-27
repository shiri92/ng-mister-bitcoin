import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/Contact.service';

@Component({
  selector: 'app-contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {

  constructor(public contactService: ContactService) { }

  term: string = '';

  ngOnInit() {
    this.contactService.getContacts();
  }

  onFilter(ev) {
    this.term = ev.target.value
    this.contactService.getContacts({ term: this.term })
  }
}
