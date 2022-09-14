import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculesRoutingModule } from './vehicules-routing.module';
import { VehiculesComponent } from './vehicules.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableListComponent } from './table-list/table-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    VehiculesComponent,
    TableListComponent
  ],
  imports: [
    CommonModule,
    VehiculesRoutingModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ]
})
export class VehiculesModule { }
