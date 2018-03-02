import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-eleventh-question',
  templateUrl: './eleventh-question.component.html',
  styleUrls: ['./eleventh-question.component.css']
})
export class EleventhQuestionComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  nextQuestion(selected){
    this.messageEvent.emit({question:"EleventhQuestion",selected:selected});
  }
}
