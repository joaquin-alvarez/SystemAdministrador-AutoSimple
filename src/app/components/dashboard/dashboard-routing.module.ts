import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: HomeComponent, pathMatch: 'full' },
    { path: 'vehiculos', loadChildren: () => import('../vehicules/vehicules.module').then(m => m.VehiculesModule) },
    { path: 'clientes', loadChildren: () => import('../clients/clients.module').then(m => m.ClientsModule) },
    { path: 'consultas', loadChildren: () => import('../messages/messages.module').then(m => m.MessagesModule) },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
