import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJobPostComponent } from './view-job-post.component';

describe('EditjobpostComponent', () => {
  let component: ViewJobPostComponent;
  let fixture: ComponentFixture<ViewJobPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewJobPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewJobPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
