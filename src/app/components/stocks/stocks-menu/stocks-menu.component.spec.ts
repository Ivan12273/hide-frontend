import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksMenuComponent } from './stocks-menu.component';

describe('StocksMenuComponent', () => {
  let component: StocksMenuComponent;
  let fixture: ComponentFixture<StocksMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StocksMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
