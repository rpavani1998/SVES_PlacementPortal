import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompetitionsComponent } from './competitions.component';

describe('AdminCompetitionsComponent', () => {
  let component: AdminCompetitionsComponent;
  let fixture: ComponentFixture<AdminCompetitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCompetitionsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
