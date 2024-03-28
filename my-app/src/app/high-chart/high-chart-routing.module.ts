import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApexchartComponent } from './apexchart/apexchart.component';

const routes: Routes = [
  {
    path:"charts",
    component:ApexchartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HighChartRoutingModule { }
