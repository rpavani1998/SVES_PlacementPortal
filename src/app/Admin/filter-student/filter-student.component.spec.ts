import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterStudentComponent } from './filter-student.component';

describe('FilterStudentComponent', () => {
  let component: FilterStudentComponent;
  let fixture: ComponentFixture<FilterStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
