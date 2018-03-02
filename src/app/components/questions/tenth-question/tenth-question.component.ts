import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tenth-question',
  templateUrl: './tenth-question.component.html',
  styleUrls: ['./tenth-question.component.css']
})
export class TenthQuestionComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  nextQuestion(selected){
    this.messageEvent.emit({question:"TenthQuestion",selected:selected});
  }
}
