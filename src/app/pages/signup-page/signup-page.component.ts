import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  userName: ''

  onSubmit() {
    this.userService.signUp(this.userName);
    this.router.navigate([''])
  }

  ngOnInit() {
  }

}
