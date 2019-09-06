import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: Form;

  constructor() {}

  printForm() {
    console.log(this.loginForm);
  }

  ngOnInit() {
  }
}

interface Form {
  login: string;
  password: string;
}
