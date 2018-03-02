import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-seventh-question',
  templateUrl: './seventh-question.component.html',
  styleUrls: ['./seventh-question.component.css']
})
export class SeventhQuestionComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  nextQuestion(selected){
    this.messageEvent.emit({question:"SeventhQuestion",selected:selected});
  }
}
