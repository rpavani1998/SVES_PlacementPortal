import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInternshipComponent } from './admin-internship.component';

describe('AdminInternshipComponent', () => {
  let component: AdminInternshipComponent;
  let fixture: ComponentFixture<AdminInternshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInternshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
