import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRegisteredCompetitionsComponent } from './view-registered-competitions.component';

describe('ViewRegisteredCompetitionsComponent', () => {
  let component: ViewRegisteredCompetitionsComponent;
  let fixture: ComponentFixture<ViewRegisteredCompetitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRegisteredCompetitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRegisteredCompetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
