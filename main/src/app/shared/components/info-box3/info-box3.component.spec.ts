import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBox3Component } from './info-box3.component';

describe('InfoBox3Component', () => {
  let component: InfoBox3Component;
  let fixture: ComponentFixture<InfoBox3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoBox3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoBox3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
