import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeFormatsComponent } from './change-formats.component';
import { ChangeFormatsRoutingModule } from './change-formats-routing.module';



@NgModule({
  declarations: [
    ChangeFormatsComponent
  ],
  imports: [
    CommonModule,
    ChangeFormatsRoutingModule
  ]
})
export class ChangeFormatsModule { }
