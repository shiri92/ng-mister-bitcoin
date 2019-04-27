import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { BitcoinService } from '../../services/bitcoin.service';
import User from '../../services/models/User';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private userService: UserService, private bitcoinService: BitcoinService) { }

  bitRate: Number
  loggedUser: User

  ngOnInit() {
    this.userService.userSubject.subscribe(user => {
      this.loggedUser = user
      if (this.loggedUser) {
        this.bitcoinService.getRate(this.loggedUser.coins).subscribe(rate => this.bitRate = rate)
      }
    });
  }
}
