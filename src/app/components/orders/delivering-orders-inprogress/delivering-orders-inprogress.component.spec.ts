import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveringOrdersInprogressComponent } from './delivering-orders-inprogress.component';

describe('DeliveringOrdersInprogressComponent', () => {
  let component: DeliveringOrdersInprogressComponent;
  let fixture: ComponentFixture<DeliveringOrdersInprogressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveringOrdersInprogressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveringOrdersInprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
