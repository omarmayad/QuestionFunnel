import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-twelfth-question',
  templateUrl: './twelfth-question.component.html',
  styleUrls: ['./twelfth-question.component.css']
})
export class TwelfthQuestionComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
 
  nextInput(){
    
    var incomeValue = (<HTMLInputElement>document.getElementById('incomeValue')).value;
    this.newMethod(incomeValue);
   

}


  private newMethod(incomeValue: string) {
    
    if (incomeValue.length >= 5) {
      var x =parseInt(incomeValue)
      this.messageEvent.emit({ IncomeValue: incomeValue });
    }
    else {
      alert("You must enter your  income's value");
    }
  }
}
