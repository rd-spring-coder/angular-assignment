import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let user = localStorage.getItem('currentUser')
    if(user){
      return true;
    }
    this.router.navigate(['/login'],{queryParams: {returnUrl: state.url}});
    return false;
  }
}
