import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobpostsComponent } from './jobposts.component';

describe('JobpostsComponent', () => {
  let component: JobpostsComponent;
  let fixture: ComponentFixture<JobpostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobpostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
