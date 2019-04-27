import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Contact from 'src/app/services/models/Contact';
import { ContactService } from '../../services/Contact.service';


@Component({
  selector: 'app-contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router,
    private contactService: ContactService) { }
  id: string;
  contact: Contact;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id
      if (this.id) {
        this.contactService.getContactById(this.id)
          .subscribe(currContact => this.contact = currContact);
      } else {
        this.contact = this.contactService.getEmptyContact();
      }
    })
  }

  onSubmit() {
    if (this.contact.name && this.contact.email && this.contact.phone) {
      this.contactService.saveContact(this.contact);
      this.router.navigate([`contact`]);
    }
  }
}
