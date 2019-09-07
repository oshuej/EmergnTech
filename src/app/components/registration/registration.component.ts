import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userEmail: string;
  login: string;
  name: string;
  password: string;
  @Input() isLogin: boolean;
  constructor() { }

  ngOnInit() {
  }
  register(login, password) {
    localStorage.setItem(login, password);
    this.isLogin = true;
  }
}
