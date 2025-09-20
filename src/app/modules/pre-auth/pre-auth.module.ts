import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreAuthComponent } from './pre-auth.component';
import { PreAuthRoutingModule } from './pre-auth-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';



@NgModule({
  declarations: [
    PreAuthComponent
  ],
  imports: [
    CommonModule,
    PreAuthRoutingModule,
    HttpClientModule
  ],
})
export class PreAuthModule { }
