import { Component, OnInit, Input } from '@angular/core';

export class User {
  email: string;
  login: string;
  name: string;
  password: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User = new User();

  constructor() { }

  ngOnInit() {
  }
  addUser() {
    console.log(this.user);
    localStorage.setItem(this.user.login, this.user.password);
  }
}
