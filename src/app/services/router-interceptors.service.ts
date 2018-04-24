import { Injectable } from '@angular/core';
import { Router,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable()
export class RouterLoginInterceptorsService implements CanActivate{

  constructor(private authService:AuthService,private router:Router) {}

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    if(this.authService.isLogin()){
      return true;
    }
    this.router.navigate(['/user/login'],{queryParams:{returnUrl:state.url}});
    return false;
  }
}
@Injectable()
export class RouterUnLoginInterceptorsService implements CanActivate{

  constructor(private authService:AuthService,private router:Router) {}

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    if(!this.authService.isLogin()){
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
