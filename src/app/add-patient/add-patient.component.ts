import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Patient } from '../patient-class';
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';
import { PatientService } from 'shared/patient.service';
import { DATE } from 'ngx-bootstrap/chronos/units/constants';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  patientData=new Patient();
  ageZeroError:boolean=false; 
  // todayDate='2020-05-27';
  // date1=new Date();
  // toMonth=this.date1.getUTCMonth();
  // toDate=this.date1.getUTCDate();  
  // finalDate:any;
  // finalMonth:any;
  list1:any[]=[];
  id:number=0;
  itemIndex:number=-1
  isEdit:boolean=false;
  isSave:boolean=false;
   constructor(private _patientService:PatientService,private router:Router, private route:ActivatedRoute, public datePipe:DatePipe) {
    }
  
ngOnInit(): void {
     let url=(this.router.url).split('/');
   console.log(url);    //['','addPatient']
     if(url[1]==='addPatient')
      this.isEdit=true;
     else
      this.isEdit=false;
     if(url[1]==='patientDetails')
      this.isSave=true;
     else
      this.isSave=false;
  


  //   let pathArray=window.location.pathname.split('/');
  //  // console.log(pathArray[1]);
  //   if(pathArray[1]==='addPatient')
  //   this.isEdit=true;
  //   else
  //   this.isEdit=false;
  //   if(pathArray[1]==='patientDetails')
  //   this.isSave=true;
  //   else
  //   this.isSave=false;

  //  this.isEdit=false;
   this.route.paramMap.subscribe((params:ParamMap) => {
     let x=params.get('patientId');
     //console.log(x);
     if(x!==null){
      // this.isEdit=true; 
      this.id=parseInt(x);
      this.list1=this._patientService.getPatients();
      if(this.list1.length!==0){
      //console.log(this.list1);
      for(let i of this.list1){
        this.itemIndex++;
      if (i.patientId===this.id){
        this.patientData=i;
        break;
      } }
      }
     }
   })
  
  }  
  //  // to set dob to be current date...
  //  this.toMonth+=1;   //month incremented by 1 as it starts from 0
  //  if(this.toDate<10){
  //       this.finalDate='0'+this.toDate;     //0 appended to make date<10 to 01,02,03....09 (two digits)
  //  }else{
  //    this.finalDate=this.toDate;
  //  }

  //  if(this.toMonth<10){
  //    this.finalMonth='0'+this.toMonth;      ////0 appended to make month<10 to 01,02,03....09 (two digits)
  //  } else{
  //     this.finalMonth=this.toMonth;
  //  }

  //  this.todayDate=this.toYear+"-"+this.finalMonth+"-"+this.finalDate;  //  console.log(date1);
  
  //   this.patientData.date=this.todayDate;


onChangeAge(){
  let splitted=(this.patientData.date).split('-');
  // console.log(splitted);  //['2022','5','27']
   let year=parseInt(splitted[0]);
   let toYear=new Date().getUTCFullYear();
   this.patientData.age=(toYear-year).toString();    //toString() because age is taken as string type
 }

onReset(pForm:NgForm){
   pForm.reset();
}
  
onSubmit(){

let pid=new Date().getTime();
this.patientData.patientId=pid;
this._patientService.addPatient(this.patientData);
}

zeroError(age:string){
  if(parseInt(age) <= 0){
  this.ageZeroError=true;
   } else{
    this.ageZeroError=false;
  }
 }
 onUpdate(){
  //this.list1=this.list1.filter(item=> item.patientId !== this.id);
  
  this.list1.splice(this.itemIndex,1,this.patientData);
  //console.log(this.patientData);
  //this.list1.push(this.patientData);
  //console.log(this.list1);
  localStorage.setItem("patient",JSON.stringify(this.list1));
  this.router.navigate(['/patientDetails'],{relativeTo:this.route});
  // this.isEdit=false;
}
}


