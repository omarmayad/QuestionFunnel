import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-thirteenth-question',
  templateUrl: './thirteenth-question.component.html',
  styleUrls: ['./thirteenth-question.component.css']
})
export class ThirteenthQuestionComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  nextQuestion(selected){
    this.messageEvent.emit({question:"ThirteenthQuestion",selected:selected});
  }
}
