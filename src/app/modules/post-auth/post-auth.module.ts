import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostAuthRoutingModule } from './post-auth-routing.module';
import { CoreModule } from '../../core/core.module';
import { PostAuthComponent } from './post-auth.component';



@NgModule({
  declarations: [
    PostAuthComponent
  ],
  imports: [
    CommonModule,
    PostAuthRoutingModule,
    CoreModule
  ]
})
export class PostAuthModule { }
