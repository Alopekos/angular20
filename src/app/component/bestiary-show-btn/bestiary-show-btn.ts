import { Component } from '@angular/core';
import { BestiaryService } from './service/bestiary-service';

@Component({
  selector: 'bestiary-show-btn',
  imports: [],
  templateUrl: './bestiary-show-btn.html',
  styleUrl: './bestiary-show-btn.css'
})
export class BestiaryShowBtn {
  constructor(private bestiaryService: BestiaryService) {}

  toggle_bestiary() {
    this.bestiaryService.toggleBestiary();
  }
}
