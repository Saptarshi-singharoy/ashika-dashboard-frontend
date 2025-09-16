import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoAndDontsComponent } from './do-and-donts.component';
import { DoAndDontsRoutingModule } from './do-and-donts-routing.module';



@NgModule({
  declarations: [
    DoAndDontsComponent
  ],
  imports: [
    CommonModule,
    DoAndDontsRoutingModule
  ]
})
export class DoAndDontsModule { }
