import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { empty } from 'rxjs/Observer';
import { Router } from '@angular/router';
@Component({
  selector: 'app-second-question',
  templateUrl: './second-question.component.html',
  styleUrls: ['./second-question.component.css']
})
export class SecondQuestionComponent implements OnInit {
  userType = "Yes";
  @Output() messageEvent = new EventEmitter<any>();
  constructor(private router :Router) { }
  ngOnInit() {
  }
  nextQuestion(selected){
    
    this.messageEvent.emit({question:"SecondQuestion",selected:selected});
    this.userType = (<HTMLInputElement>document.getElementById('Userinput')).value;

    //if(this.userType == "No"){
    //this.router.navigateByUrl('/questions/forth-question');
   // }
  }

}
