import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoginComponent } from './resgiter/login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReportsComponent } from './reports/reports.component';
import { RiskReportComponent } from './reports/risk-report/risk-report.component';
import { GestiongroupeComponent } from './gestiongroupe/gestiongroupe.component';
import { GestionrelationComponent } from './gestionrelation/gestionrelation.component';
import { CreationapplicationComponent } from './creationapplication/creationapplication.component';
import { CreationserviceComponent } from './creationservice/creationservice.component';
import { CreationsousserviceComponent } from './creationsousservice/creationsousservice.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReportsComponent,
    RiskReportComponent,
    GestiongroupeComponent,
    GestionrelationComponent,
    CreationapplicationComponent,
    CreationserviceComponent,
    CreationsousserviceComponent,
    

   

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule
   ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
