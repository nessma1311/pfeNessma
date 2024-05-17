import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { ReportsComponent } from '../reports/reports.component';

const routes: Routes = [
  {path:'', component: HomeComponent ,
        children: [
            { path: '', component: DashboardComponent, data: { breadcrumb: 'Dashboard' }},
            { path: 'dashboard', component: DashboardComponent, data: { breadcrumb: 'Dashboard' }},
            { path: 'reports', component: ReportsComponent, data: { breadcrumb: 'reports' }},
            { path: 'reports', loadChildren: () => import('./../reports/reports.module').then(mod => mod.ReportsModule), data: { breadcrumb: 'Reports' } },

           { path: 'user', loadChildren: () => import('./../user/user.module').then(mod => mod.UserModule), data: { breadcrumb: 'Profile' } },

       
            { path: '**', redirectTo: '', pathMatch: 'full' },

        ],
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
