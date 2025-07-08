import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelBookingsComponent } from './cancel-bookings.component';

describe('CancelBookingsComponent', () => {
  let component: CancelBookingsComponent;
  let fixture: ComponentFixture<CancelBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancelBookingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CancelBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
