import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Contact from 'src/app/services/models/Contact';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {

  constructor(private router: Router) { }

  @Output() delete = new EventEmitter();
  @Input() contact: Contact;
  imgUrl: string;

  ngOnInit() {
    this.imgUrl = `https://robohash.org/sets=${this.contact._id}/?size=50x50`
  }

  onEdit(contact: Contact) {
    this.router.navigate([`contact/edit/${contact._id}`]);
  }

  handleDelete(contact: Contact, ev) {
    ev.stopPropagation();
    this.delete.emit(contact);
  }
}
