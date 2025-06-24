import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bestiary } from './bestiary';

describe('Bestiary', () => {
  let component: Bestiary;
  let fixture: ComponentFixture<Bestiary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bestiary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bestiary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
