import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { routingComponents } from './app-routing.module';
import { DatePipe } from '@angular/common';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { HomeComponent } from './home/home.component';
import { PatientService } from 'shared/patient.service';

@NgModule({
  declarations: [
    AppComponent,
    // AddPatientComponent,
    // PatientDetailsComponent,
    // PageNotFoundComponent
    routingComponents,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [DatePipe,PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
