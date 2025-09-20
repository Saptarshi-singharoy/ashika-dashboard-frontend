import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevenueAnalysisComponent } from './revenue-analysis.component';
import { RevenueAnalysisRoutingModule } from './revenue-analysis-routing.module';
import { SharedModule } from '../../../shared/shared.module';



@NgModule({
  declarations: [
    RevenueAnalysisComponent
  ],
  imports: [
    CommonModule,
    RevenueAnalysisRoutingModule,
    SharedModule
  ]
})
export class RevenueAnalysisModule { }
