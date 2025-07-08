import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssHelpersComponent } from './css-helpers.component';

describe('CssHelpersComponent', () => {
  let component: CssHelpersComponent;
  let fixture: ComponentFixture<CssHelpersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CssHelpersComponent],
    });
    fixture = TestBed.createComponent(CssHelpersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
