import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { User } from '../models/user';

@Injectable()
export class AuthenticationService {

  user: User;
  constructor(private http: HttpClient) { }

  login(username:string,password:string){
    // this would actually be a post request to get the user authenticated
    // return this.http.post<any>('http://localhost:1111/api/users/login',{username:username,password:password})
    //   .map( (response: Response) => response.json());
    this.user = {username:username, password: password, token:'Bearer abcde12345'};
    localStorage.setItem('currentUser',JSON.stringify(this.user));
    return this.user;
      //     this.router.navigate([this.returnUrl]);

  }
}
