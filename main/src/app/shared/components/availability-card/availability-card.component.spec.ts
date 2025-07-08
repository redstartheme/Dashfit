import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityCardComponent } from './availability-card.component';

describe('AvailabilityCardComponent', () => {
  let component: AvailabilityCardComponent;
  let fixture: ComponentFixture<AvailabilityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailabilityCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailabilityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
