import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveringOrderDetailsComponent } from './delivering-order-details.component';

describe('DeliveringOrderDetailsComponent', () => {
  let component: DeliveringOrderDetailsComponent;
  let fixture: ComponentFixture<DeliveringOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveringOrderDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveringOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
