import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingAverageComponent } from './booking-average.component';

describe('BookingAverageComponent', () => {
  let component: BookingAverageComponent;
  let fixture: ComponentFixture<BookingAverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingAverageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
