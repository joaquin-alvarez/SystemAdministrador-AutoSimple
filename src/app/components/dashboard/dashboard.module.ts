import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TestComponent } from '../test/test.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ]
})
export class DashboardModule { }
