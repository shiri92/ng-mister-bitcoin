import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import User from './services/models/User';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-mister-bitcoin';
  constructor(private userService: UserService, private router: Router) { }

  loggedUser: User;

  ngOnInit() {
    this.userService.userSubject.subscribe(user => {
      this.loggedUser = user;
      if (!this.loggedUser) {
        this.router.navigateByUrl('/signup')
      }
    });
  }
}
