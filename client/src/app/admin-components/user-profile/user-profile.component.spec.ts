import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserProfileComponent } from './user-profile.component';

describe('AdminUserProfileComponent', () => {
  let component: AdminUserProfileComponent;
  let fixture: ComponentFixture<AdminUserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
