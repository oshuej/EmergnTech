import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  uri = 'http://localhost:5000/api';
  token;

  constructor(private http: HttpClient, private router: Router) { }
  login(login22: string, password22: string) {
    this.http.post(this.uri + '/authenticate', {login: login22, password: password22})
      .subscribe((resp: any) => {
        this.router.navigate(['main']);
        localStorage.setItem('auth_token', resp.token);
      });

  }
  logout() {
    localStorage.removeItem('token');
  }

  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }

}
