import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGuestDetailsDialogComponent } from './add-guest-details-dialog.component';

describe('AddGuestDetailsDialogComponent', () => {
  let component: AddGuestDetailsDialogComponent;
  let fixture: ComponentFixture<AddGuestDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddGuestDetailsDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddGuestDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
