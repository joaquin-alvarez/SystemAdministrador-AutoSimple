import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableListComponent } from './table-list/table-list.component';
import { VehiculesComponent } from './vehicules.component';

const routes: Routes = [
  { path: '', component: VehiculesComponent , children: [
    { path: '', component: TableListComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculesRoutingModule { }
