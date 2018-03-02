import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-eighth-question',
  templateUrl: './eighth-question.component.html',
  styleUrls: ['./eighth-question.component.css']
})
export class EighthQuestionComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  nextQuestion(selected){
    this.messageEvent.emit({question:"EighthQuestion",selected:selected});
  }
}
