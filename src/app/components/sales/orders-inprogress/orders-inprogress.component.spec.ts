import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersInprogressComponent } from './orders-inprogress.component';

describe('OrdersInprogressComponent', () => {
  let component: OrdersInprogressComponent;
  let fixture: ComponentFixture<OrdersInprogressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersInprogressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersInprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
