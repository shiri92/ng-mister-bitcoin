import { Component, OnInit, Input } from '@angular/core';
import User from '../../services/models/User';
import Contact from '../../services/models/Contact';
import Move from 'src/app/services/models/Move';


@Component({
  selector: 'app-moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss']
})
export class MovesListComponent implements OnInit {

  constructor() { }

  @Input() user: User;
  @Input() contact: Contact;
  moves: Move[];


  ngOnInit() {
    if (this.contact) {
      this.moves = this.user.moves.filter(move => {
        return move.to === this.contact.name;
      })
    }
  }
}
