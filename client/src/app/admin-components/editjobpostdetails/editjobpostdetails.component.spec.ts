import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditjobpostdetailsComponent } from './editjobpostdetails.component';

describe('EditjobpostdetailsComponent', () => {
  let component: EditjobpostdetailsComponent;
  let fixture: ComponentFixture<EditjobpostdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditjobpostdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditjobpostdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
