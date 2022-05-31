import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';

const routes: Routes = [
  {
    path:'', redirectTo:"/home", pathMatch:'full'
  },
  {
  path:"home", component:HomeComponent
  },
  {
    path:"addPatient", component:AddPatientComponent
  },
  {
    path:"patientDetails", component:PatientDetailsComponent
  },
  {
    path:'patientDetails/:patientId', component:AddPatientComponent
  },
  {
    path:"**", component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 
export const routingComponents=[AddPatientComponent,PatientDetailsComponent,PageNotFoundComponent];

