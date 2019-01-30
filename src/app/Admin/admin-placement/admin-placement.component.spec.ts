import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPlacementComponent } from './admin-placement.component';

describe('AdminPlacementComponent', () => {
  let component: AdminPlacementComponent;
  let fixture: ComponentFixture<AdminPlacementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPlacementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
