import {Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validators } from "@angular/forms";

@Directive({
    selector:'[zero-error]',
    providers:[{
        provide:NG_VALIDATORS,
        useExisting:ZeroErrorValidatorDirective,
        multi:true
    }]
})
export class ZeroErrorValidatorDirective implements Validators{
    @Input('age') zeroAge:number=1;
   validate(control:AbstractControl):{[key:string]:any} | null | undefined{
       console.log(this.zeroAge);
    if(this.zeroAge<=0){
      let zero=true;
console.log(zero);
      return zero? {'zeroError':true} : null;
    } 
    return;
  }
}