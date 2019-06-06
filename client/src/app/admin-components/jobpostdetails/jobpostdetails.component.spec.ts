import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobpostdetailsComponent } from './jobpostdetails.component';

describe('JobpostdetailsComponent', () => {
  let component: JobpostdetailsComponent;
  let fixture: ComponentFixture<JobpostdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JobpostdetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobpostdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
