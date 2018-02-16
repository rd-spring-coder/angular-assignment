import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model:any = {};
  currentUser: User;
  returnUrl: string;
  constructor(private route: ActivatedRoute,
    private authService: AuthenticationService,
  private router: Router) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(){
    //call a service to return a user with a token - store that in localStorage and redirect to home
    this.currentUser = this.authService.login(this.model.username, this.model.password);
    if(this.currentUser){
      this.router.navigate([this.returnUrl]);
    }
      //on retrieving data from a backend   
    // .subscribe(
      //   data => {
      //     localStorage.setItem('currentUser',JSON.stringify(data));
      //     this.router.navigate([this.returnUrl]);
      //   },
      //   error => console.error(error)
      // );
  }

}
