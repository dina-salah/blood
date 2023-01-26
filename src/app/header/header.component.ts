import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  displaySearch:boolean= true

  clickSearch(){
    if(this.displaySearch != false){
      this.displaySearch =false
    }else{
      this.displaySearch =true
    }
    // console.log( this.displaySearch)
    return this.displaySearch
  }
}
