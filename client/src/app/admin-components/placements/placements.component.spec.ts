import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPlacementsComponent } from './placements.component';

describe('AdminPlacementsComponent', () => {
  let component: AdminPlacementsComponent;
  let fixture: ComponentFixture<AdminPlacementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPlacementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPlacementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
