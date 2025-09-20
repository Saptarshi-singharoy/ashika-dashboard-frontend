// src/app/auth/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
// import { AuthService } from '../';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor( private router: Router) {}

  canActivate(): boolean {
    if (!!localStorage.getItem("accessToken")) {
      return true;
    }
    this.router.navigate(['/pre-auth/sign-in']);
    return false;
  }
}
