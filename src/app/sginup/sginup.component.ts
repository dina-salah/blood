import { Component } from '@angular/core';

@Component({
  selector: 'app-sginup',
  templateUrl: './sginup.component.html',
  styleUrls: ['./sginup.component.css']
})
export class SginupComponent {

  uDisplay:boolean =true;
  hDisplay:boolean =true;
  oDisplay:boolean =true;

  hospitalDisplay(){
    this.hDisplay =false
    this.uDisplay=true 
    this.oDisplay =true
  }

  userDisplay(){
    this.uDisplay=false
    this.hDisplay =true 
    this.oDisplay =true
  }
  
  orgnizationDisplay(){
    this.oDisplay =false
    this.uDisplay=true
    this.hDisplay =true 
  }

  userSubmit(signup:any){
console.log('account is created', signup)
  }
}
