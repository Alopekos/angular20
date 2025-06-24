import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerClasses } from './player-classes';

describe('PlayerClasses', () => {
  let component: PlayerClasses;
  let fixture: ComponentFixture<PlayerClasses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerClasses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerClasses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
