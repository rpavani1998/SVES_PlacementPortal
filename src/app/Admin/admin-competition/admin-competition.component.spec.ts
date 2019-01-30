import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompetitionComponent } from './admin-competition.component';

describe('AdminCompetitionComponent', () => {
  let component: AdminCompetitionComponent;
  let fixture: ComponentFixture<AdminCompetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCompetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
