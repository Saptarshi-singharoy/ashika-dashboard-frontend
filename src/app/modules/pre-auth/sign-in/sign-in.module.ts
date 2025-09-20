import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { SignInRoutingModule } from './sign-in-routing.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    SignInRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [AuthService]
})
export class SignInModule { }
