import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreAuthComponent } from './pre-auth.component';
import { PreAuthRoutingModule } from './pre-auth-routing.module';



@NgModule({
  declarations: [
    PreAuthComponent
  ],
  imports: [
    CommonModule,
    PreAuthRoutingModule
  ]
})
export class PreAuthModule { }
