import { Component, Input } from '@angular/core';
import { Bestiary } from '../bestiary';

@Component({
  selector: 'monster-card',
  imports: [],
  templateUrl: './monster-card.html',
  styleUrl: './monster-card.css'
})
export class MonsterCard {
  @Input() monsterData : any;
}
