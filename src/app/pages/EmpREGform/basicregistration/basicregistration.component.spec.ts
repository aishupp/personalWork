import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicregistrationComponent } from './basicregistration.component';

describe('BasicregistrationComponent', () => {
  let component: BasicregistrationComponent;
  let fixture: ComponentFixture<BasicregistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicregistrationComponent]
    });
    fixture = TestBed.createComponent(BasicregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
