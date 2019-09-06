import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }
  register(login, password) {
    localStorage.setItem(login, password);
  }
}
