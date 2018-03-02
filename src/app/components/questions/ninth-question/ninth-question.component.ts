import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ninth-question',
  templateUrl: './ninth-question.component.html',
  styleUrls: ['./ninth-question.component.css']
})
export class NinthQuestionComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  nextQuestion(selected){
    this.messageEvent.emit({question:"NinthQuestion",selected:selected});
  }
}
