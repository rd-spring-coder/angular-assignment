import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers():Observable<any>{
   return this.http.get('https://api.github.com/users')
      .map(data => {
        console.log(data);
        return data;
      });
  }

  getUserDetails(username:string){
    return this.http.get(`https://api.github.com/users/${username}`)
      .map(data =>{
        console.log(data);
        return data;
      });
  }

  navigateTo(since:number):Observable<any>{
    return this.http.get(`https://api.github.com/users?since=${since}`);
  }
}
