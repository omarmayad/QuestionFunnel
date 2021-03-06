import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-continue',
  templateUrl: './continue.component.html',
  styleUrls: ['./continue.component.css']
})
export class ContinueComponent implements OnInit {
  inputsList:any=["FirstInput","SecondInput","ThirdInput",
  "ForthInput"];
  index = 0;
  currentInput=this.inputsList[this.index]; 
  AllTheSelectedInputs=[] ;
  percentage=0;
  currentColor="";
  constructor(private router :Router){
    this.currentColor= localStorage.getItem('Color');
  }
  ngOnInit() {
  }
  receiveEvent($event){
    
    this.index++;
    this.percentage += ((100/this.inputsList.length)/4) ;
    this.currentInput=this.inputsList[this.index];

    console.log(this.percentage)
    this.AllTheSelectedInputs.push($event);
    if(this.index == 4){
      //go to final page
      localStorage.setItem('inputs', JSON.stringify(this.AllTheSelectedInputs));
      this.router.navigateByUrl('/questions');
    }
  }

}
