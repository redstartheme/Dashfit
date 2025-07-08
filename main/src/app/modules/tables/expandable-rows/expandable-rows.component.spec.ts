import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableRowsComponent } from './expandable-rows.component';

describe('ExpandableRowsComponent', () => {
  let component: ExpandableRowsComponent;
  let fixture: ComponentFixture<ExpandableRowsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ExpandableRowsComponent],
    });
    fixture = TestBed.createComponent(ExpandableRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
