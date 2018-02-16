import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: User[];
  selectedUser: User;
  since:number = 1;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers()
      .subscribe(
        data => this.users = data
      )
  }

  onSelect(user: User){
    this.selectedUser = user;
  }

  navigateTo(){
    // console.log(this.slice)
    let sliced = this.since++;
    this.userService.navigateTo(sliced)
      .subscribe(
        data => {
          let oldUsers = this.users.slice(0,sliced);
          this.users.length=0;
          // this.users.push(...oldUsers);
          let allUsers = oldUsers.concat(data);
          this.users = allUsers;
        },
        error => console.error(error)
      );
  }

}
