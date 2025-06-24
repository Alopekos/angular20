import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestiaryShowBtn } from './bestiary-show-btn';

describe('BestiaryShowBtn', () => {
  let component: BestiaryShowBtn;
  let fixture: ComponentFixture<BestiaryShowBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestiaryShowBtn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestiaryShowBtn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
