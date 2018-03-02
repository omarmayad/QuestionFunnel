import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenthQuestionComponent } from './tenth-question.component';

describe('TenthQuestionComponent', () => {
  let component: TenthQuestionComponent;
  let fixture: ComponentFixture<TenthQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenthQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenthQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
