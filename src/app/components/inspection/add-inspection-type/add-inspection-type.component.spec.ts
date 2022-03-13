import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInspectionTypeComponent } from './add-inspection-type.component';

describe('AddInspectionTypeComponent', () => {
  let component: AddInspectionTypeComponent;
  let fixture: ComponentFixture<AddInspectionTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInspectionTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInspectionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
