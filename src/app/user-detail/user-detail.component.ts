import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user: any;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getUserDetails(this.user.login)
      .subscribe(
        data => this.user = data,
        error => console.error(error)
      );
  }

}
