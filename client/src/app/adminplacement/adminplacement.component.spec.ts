import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminplacementComponent } from './adminplacement.component';

describe('AdminplacementComponent', () => {
  let component: AdminplacementComponent;
  let fixture: ComponentFixture<AdminplacementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminplacementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
