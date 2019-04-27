import { Component, OnInit } from '@angular/core';
import Contact from '../../services/models/Contact';
import User from '../../services/models/User';
import { ContactService } from '../../services/Contact.service';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {

  constructor(private contactService: ContactService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  contact: Contact;
  user: User;
  imgUrl: string;

  ngOnInit() {
    this.userService.userSubject.subscribe(currUser => this.user = currUser);
    this.route.params.subscribe(params => {
      let contactId = params.id
      this.contactService.getContactById(contactId).subscribe(currContact => this.contact = currContact)
      this.imgUrl = `https://robohash.org/sets=${contactId}/?size=100x100`
    })
  }

  onEdit(contact: Contact) {
    this.router.navigate([`contact/edit/${contact._id}`]);
  }

  onDelete(contact: Contact) {
    if (confirm('Remove this contact?')) {
      this.contactService.deleteContact(contact._id);
      this.router.navigate([`contact`]);
    }
  }

  onTransfer(amount: number) {
    if (amount > 0) {
      if (amount <= this.user.coins) {
        let newUser = JSON.parse(JSON.stringify(this.user));
        newUser.coins -= amount;
        this.userService.updateUser(newUser);
        this.userService.addMove(this.contact, amount);
      }
    }
  }
}
