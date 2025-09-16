import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreAuthComponent } from './pre-auth.component';

describe('PreAuthComponent', () => {
  let component: PreAuthComponent;
  let fixture: ComponentFixture<PreAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreAuthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
