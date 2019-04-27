import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/Contact.service';
import Contact from '../../services/models/Contact';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor(private contactService: ContactService, private router: Router) { }

  contacts: Array<Contact>;

  ngOnInit() {
    this.contactService.contactsSubject.subscribe(contacts => this.contacts = contacts)
  }

  onAdd() {
    this.router.navigate([`contact/edit`]);
  }

  onDelete(contact: Contact) {
    this.contactService.deleteContact(contact._id);
  }
}
