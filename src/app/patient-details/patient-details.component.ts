import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConnectableObservable } from 'rxjs';
import { PatientService } from 'shared/patient.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})

export class PatientDetailsComponent implements OnInit {
  list1:any[]=[];
  delIndex:number=-1;
  isEmpty:string=''
  constructor(private _patientService:PatientService, private router:Router, private route:ActivatedRoute) { }
  
  ngOnInit(){
       this.list1=this._patientService.getPatients();
       if(this.list1.length===0)
       this.isEmpty="No Reacords Available";
       else
       this.isEmpty='';
    }

   moveTo(editPatient:any){
    this.router.navigate([editPatient.patientId],{relativeTo:this.route})
   }

   onDelete(delObject:any){
      this.list1=this._patientService.getPatients();
      if(this.list1.length!==0){
        //console.log(this.list1);
        for(let i of this.list1){
          this.delIndex++;
          if(i.patientId==delObject.patientId) 
            break;
         }
       this.list1.splice(this.delIndex,1);
       this.delIndex=-1;
       if(this.list1.length!==0){
         localStorage.setItem("patient",JSON.stringify(this.list1));
      } else {
         localStorage.removeItem("patient");
      }
     }
}  
}
    //  console.log(editPatient);

    // this.list1=this._patientService.getPatientDetails();
    // console.log(this.list1);
    // console.log(this.patientData);
    // console.log(editPatient.patientId);
    // console.log(this.list1[editPatient.patientId]);




