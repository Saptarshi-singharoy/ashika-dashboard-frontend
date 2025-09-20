import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CoreModule } from "../../../core/core.module";
import { SharedModule } from '../../../shared/shared.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule,
    SharedModule
]
})
export class DashboardModule { }
