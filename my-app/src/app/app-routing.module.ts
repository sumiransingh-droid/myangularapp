import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { InterpolationComponent } from './comps/databinding/interpolation/interpolation.component';
import { PropertyBindingComponent } from './comps/databinding/property-binding/property-binding.component';
import { EventBindingComponent } from './comps/databinding/event-binding/event-binding.component';
import { TwowayDataComponent } from './comps/databinding/twoway-data/twoway-data.component';
import { LoginComponent } from './user-auth/login/login.component';
import { HighChartModule } from './high-chart/high-chart.module';
const routes: Routes = [
  {
    component:StudentComponent,
    path:'student'
  },
  {
    component:InterpolationComponent,
    path:'interpolation'
  },
  {
    component:PropertyBindingComponent,
    path:'property'
  },
  {
    component:EventBindingComponent,
    path:'event'
  },
  {
    component:TwowayDataComponent,
    path:'twoway'
  },
  {
    component:LoginComponent,
    path:'login'
  },
  {

    path: 'chart',
    loadChildren: () => import('./high-chart/high-chart.module').then(m => HighChartModule)
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
