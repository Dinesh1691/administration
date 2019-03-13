import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffCrudComponent } from './staff-crud.component';

describe('StaffCrudComponent', () => {
  let component: StaffCrudComponent;
  let fixture: ComponentFixture<StaffCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
