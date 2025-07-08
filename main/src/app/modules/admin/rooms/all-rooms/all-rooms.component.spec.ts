import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRoomComponent } from './all-room.component';

describe('AllRoomComponent', () => {
  let component: AllRoomComponent;
  let fixture: ComponentFixture<AllRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllRoomComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AllRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
