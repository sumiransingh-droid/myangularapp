import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighChartRoutingModule } from './high-chart-routing.module';
import { ApexchartComponent } from './apexchart/apexchart.component';


@NgModule({
  declarations: [
    ApexchartComponent
  ],
  imports: [
    CommonModule,
    HighChartRoutingModule
  ],
  exports : [
    ApexchartComponent
  ]
})
export class HighChartModule { }
