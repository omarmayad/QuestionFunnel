import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EighthQuestionComponent } from './eighth-question.component';

describe('EighthQuestionComponent', () => {
  let component: EighthQuestionComponent;
  let fixture: ComponentFixture<EighthQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EighthQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EighthQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
