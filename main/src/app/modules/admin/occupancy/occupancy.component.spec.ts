import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupancyComponent } from './occupancy.component';

describe('OccupancyComponent', () => {
  let component: OccupancyComponent;
  let fixture: ComponentFixture<OccupancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OccupancyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OccupancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
