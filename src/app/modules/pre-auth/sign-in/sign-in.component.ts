import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {


  formData = {
    email:'',
    password:''
  }

async onSubmit() {
console.log(this.formData);
  
  this.authService.signIn(this.formData)

}
  constructor(private router: Router,private authService: AuthService){}

goToForgotPassword() {
this.router.navigate(['/pre-auth/forgot-password'])
}

}
