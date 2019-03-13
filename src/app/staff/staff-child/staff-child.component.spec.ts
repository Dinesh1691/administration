import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffChildComponent } from './staff-child.component';

describe('StaffChildComponent', () => {
  let component: StaffChildComponent;
  let fixture: ComponentFixture<StaffChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
