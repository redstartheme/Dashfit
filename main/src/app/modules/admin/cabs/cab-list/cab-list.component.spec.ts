import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabListComponent } from './cab-list.component';

describe('CabListComponent', () => {
  let component: CabListComponent;
  let fixture: ComponentFixture<CabListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CabListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
