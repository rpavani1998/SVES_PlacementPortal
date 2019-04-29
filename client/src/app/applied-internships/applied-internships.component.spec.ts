import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedInternshipsComponent } from './applied-internships.component';

describe('AppliedInternshipsComponent', () => {
  let component: AppliedInternshipsComponent;
  let fixture: ComponentFixture<AppliedInternshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliedInternshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedInternshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
