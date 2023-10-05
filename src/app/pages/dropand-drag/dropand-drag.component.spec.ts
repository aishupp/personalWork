import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropandDragComponent } from './dropand-drag.component';

describe('DropandDragComponent', () => {
  let component: DropandDragComponent;
  let fixture: ComponentFixture<DropandDragComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropandDragComponent]
    });
    fixture = TestBed.createComponent(DropandDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
