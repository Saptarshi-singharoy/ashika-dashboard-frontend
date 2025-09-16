import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoAndDontsComponent } from './do-and-donts.component';

describe('DoAndDontsComponent', () => {
  let component: DoAndDontsComponent;
  let fixture: ComponentFixture<DoAndDontsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoAndDontsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoAndDontsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
