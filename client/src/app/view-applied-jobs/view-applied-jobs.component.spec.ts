import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppliedJobsComponent } from './view-applied-jobs.component';

describe('ViewAppliedJobsComponent', () => {
  let component: ViewAppliedJobsComponent;
  let fixture: ComponentFixture<ViewAppliedJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAppliedJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppliedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
