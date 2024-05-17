import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './resgiter/login/login.component';
import { AuthGuard } from './resgiter/login/AuthGuard';

import { GestiongroupeComponent } from './gestiongroupe/gestiongroupe.component';

import { GestionrelationComponent } from './gestionrelation/gestionrelation.component';
import { CreationapplicationComponent } from './creationapplication/creationapplication.component';
import { CreationserviceComponent } from './creationservice/creationservice.component';
import { CreationsousserviceComponent } from './creationsousservice/creationsousservice.component';


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'home', loadChildren:()=> import('./home/home.module').then(mod => mod.HomeModule), data: {breadcrumb: 'Home'} },
  
  {path:'**', redirectTo:'not-found', pathMatch: 'full'},
  {path:'gestiongroupe',component:GestiongroupeComponent},
  {path:'gestionrelation',component:GestionrelationComponent},
  {path:'creationapplication',component:CreationapplicationComponent},
  {path:'creationservice',component:CreationserviceComponent},
  {path:'creationsousservice',component:CreationsousserviceComponent}
 


];

@NgModule({
  imports: [  RouterModule.forRoot(routes,{
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
