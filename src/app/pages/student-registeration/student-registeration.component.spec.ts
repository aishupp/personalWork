import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegisterationComponent } from './student-registeration.component';

describe('StudentRegisterationComponent', () => {
  let component: StudentRegisterationComponent;
  let fixture: ComponentFixture<StudentRegisterationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentRegisterationComponent]
    });
    fixture = TestBed.createComponent(StudentRegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
