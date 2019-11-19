import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
@Injectable({
  providedIn: 'root'
})
export class LogedGuard implements CanActivate {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean |
    UrlTree {
    return this.afAuth.authState.pipe(map(auth => {
      if (isNullOrUndefined(auth)) {
        return true;
      }
      this.router.navigateByUrl('/home');
      return false;
    }));
  }

}
