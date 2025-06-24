import { Component } from '@angular/core';
import { MonsterCard } from "./monster-card/monster-card";

@Component({
  selector: 'bestiary',
  imports: [MonsterCard],
  templateUrl: './bestiary.html',
  styleUrl: './bestiary.css'
})
export class Bestiary {
   bestiaryData : any[] = [
    {
      "name": "blob",
      "description": "Text",
      "img": "/img-placeholder.svg"
    },
    {
      "name": "blob2",
      "description": "Text2",
      "img": "/img-placeholder.svg"
    }
   ];
   
}
