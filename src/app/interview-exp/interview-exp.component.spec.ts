import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewExpComponent } from './interview-exp.component';

describe('InterviewExpComponent', () => {
  let component: InterviewExpComponent;
  let fixture: ComponentFixture<InterviewExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewExpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
