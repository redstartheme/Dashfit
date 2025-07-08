import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnReorderComponent } from './column-reorder.component';

describe('ColumnReorderComponent', () => {
  let component: ColumnReorderComponent;
  let fixture: ComponentFixture<ColumnReorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ColumnReorderComponent],
    });
    fixture = TestBed.createComponent(ColumnReorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
