import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';


@NgModule({
  declarations: [
    LineChartComponent,
    DonutChartComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
