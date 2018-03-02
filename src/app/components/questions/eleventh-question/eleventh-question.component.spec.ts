import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EleventhQuestionComponent } from './eleventh-question.component';

describe('EleventhQuestionComponent', () => {
  let component: EleventhQuestionComponent;
  let fixture: ComponentFixture<EleventhQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EleventhQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EleventhQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
