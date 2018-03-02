import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
@Component({
  selector: 'app-fifth-question',
  templateUrl: './fifth-question.component.html',
  styleUrls: ['./fifth-question.component.css']
})
export class FifthQuestionComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
 
  nextInput(){
    
    var homeValue = (<HTMLInputElement>document.getElementById('homeValue')).value;
    this.newMethod(homeValue);

}

  private newMethod(homeValue: string) {
    if (homeValue.length >= 5) {
      this.messageEvent.emit({ HomeValue: homeValue });
    }
    else {
      alert("You must enter your estimated home's value");
    }
  }
}
