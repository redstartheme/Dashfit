import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestListCardComponent } from './guest-list-card.component';

describe('GuestListCardComponent', () => {
  let component: GuestListCardComponent;
  let fixture: ComponentFixture<GuestListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestListCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
