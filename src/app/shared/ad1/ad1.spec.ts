import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ad1 } from './ad1';

describe('Ad1', () => {
  let component: Ad1;
  let fixture: ComponentFixture<Ad1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ad1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ad1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
