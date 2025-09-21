import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';

import{ Chart, registerables} from 'chart.js';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { HalfDonutComponent } from './half-donut/half-donut.component';

Chart.register(...registerables)
@NgModule({
  declarations: [
    LineChartComponent,
    DonutChartComponent,
    TableComponent,
    HalfDonutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule,
    HttpClientModule
  ],
  exports: [
    LineChartComponent,
    DonutChartComponent,
    TableComponent
  ]
})
export class SharedModule { }
