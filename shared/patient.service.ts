import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  list:any[]=[];
  pList:any[]=[];
  constructor() { }

  addPatient(obj:any){
  // let x:any=localStorage.getItem("patient");
  // if(x!==null)
  //   this.list=JSON.parse(x);
  this.getPatients();
  this.list.push(obj);
  localStorage.setItem("patient",JSON.stringify(this.list));
  }

//   getPatientDetails():any{
//     // let x:any=localStorage.getItem("patient");
//     // if(x!==null)
//     //   this.list=JSON.parse(x);
//     this.pList=this.getPatients();
//     if(this.pList!==null){
//         return(this.pList);
//     }else{
//         alert("No Data Available");
//  }
//   }

 getPatients():any{
  let x:any=localStorage.getItem("patient");
  if(x!==null)
    this.list=JSON.parse(x);
    return(this.list);
 }
 
}
