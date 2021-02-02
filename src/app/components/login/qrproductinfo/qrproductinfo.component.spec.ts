import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrproductinfoComponent } from './qrproductinfo.component';

describe('QrproductinfoComponent', () => {
  let component: QrproductinfoComponent;
  let fixture: ComponentFixture<QrproductinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrproductinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrproductinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
