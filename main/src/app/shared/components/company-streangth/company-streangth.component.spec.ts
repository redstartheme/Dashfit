import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyStreangthComponent } from './company-streangth.component';

describe('CompanyStreangthComponent', () => {
  let component: CompanyStreangthComponent;
  let fixture: ComponentFixture<CompanyStreangthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyStreangthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyStreangthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
