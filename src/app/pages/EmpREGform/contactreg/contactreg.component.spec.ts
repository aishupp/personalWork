import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactregComponent } from './contactreg.component';

describe('ContactregComponent', () => {
  let component: ContactregComponent;
  let fixture: ComponentFixture<ContactregComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactregComponent]
    });
    fixture = TestBed.createComponent(ContactregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
