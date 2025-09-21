import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl = `${environment.apiUrl}/auth/login`

  constructor(private http: HttpClient, private router: Router ) { }

  async signIn(formData:any){
     this.http.post<{accessToken: any}>(this.loginUrl, formData).subscribe({
      next: (res) => {
        localStorage.setItem('accessToken', res.accessToken)
        this.router.navigate(['post-auth/dashboard']);
      },
      error: (err) => {
        console.log("Error while sign in", err);
        return err;
      }
     })

  }

  getToken() {
    return localStorage.getItem('accessToken');
  }
}
