import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl ='http://localhost:3000/auth/login'

  constructor(private http: HttpClient, private router: Router ) { }

  async signIn(formData:any){
     this.http.post<{accessToken: any}>(this.loginUrl, formData).subscribe({
      next: (res) => {
        localStorage.setItem('accessToken', res.accessToken)
        this.router.navigate(['post-auth/dashboard']);
      },
      error: (err) => {
        console.log("Error while sign in", err)
      }
     })

  }

  getToken() {
    return localStorage.getItem('accessToken');
  }
}
