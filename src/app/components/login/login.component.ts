import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = '';
  password = '';
  constructor(private authService: AuthService) {

  }
  // authorization(login, password) {
  //   // if (localStorage.getItem(login) === password) {
  //   //   console.log(true);
  //   // } else {
  //   //   console.log(false);
  //   // }
  //   // console.log(login, password);
  //   if (localStorage.getItem(login) === password) {
  //     this.isAuthorized = true;
  //   } else {
  //     console.log(false);
  //   }
  // }
  ngOnInit() {
  }
  Login() {
    console.log('you are logging in')
  }
}
