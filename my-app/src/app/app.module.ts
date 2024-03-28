import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StepsComponent } from './comps/steps/steps.component';
import { NotificationsComponent } from './comps/notifications/notifications.component';
import { DatabindingComponent } from './comps/databinding/databinding.component';
import { InterpolationComponent } from './comps/databinding/interpolation/interpolation.component';
import { PropertyBindingComponent } from './comps/databinding/property-binding/property-binding.component';
import { EventBindingComponent } from './comps/databinding/event-binding/event-binding.component';
import { ClassBindingComponent } from './comps/databinding/class-binding/class-binding.component';
import { TwowayDataComponent } from './comps/databinding/twoway-data/twoway-data.component';
import { FormsModule } from '@angular/forms';
import { UserAuthModule } from './user-auth/user-auth.module';
import { HighChartModule } from './high-chart/high-chart.module';
import { NgApexchartsModule } from 'ng-apexcharts';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StepsComponent,
    NotificationsComponent,
    DatabindingComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    ClassBindingComponent,
    TwowayDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserAuthModule,
    HighChartModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
