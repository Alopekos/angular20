import { Component, OnInit } from '@angular/core';
import { MonsterCard } from "./monster-card/monster-card";
import { BestiaryService } from '../bestiary-show-btn/service/bestiary-service';

@Component({
  selector: 'bestiary',
  imports: [MonsterCard],
  templateUrl: './bestiary.html',
  styleUrl: './bestiary.css'
})
export class Bestiary {
  isBestiaryShown : boolean = false

  constructor(private bestiaryService: BestiaryService){}

  ngOnInit(){
    this.bestiaryService.isBestiaryShown$.subscribe(state =>{
      this.isBestiaryShown = state;
    })
  }

   bestiaryData : any[] = [
  { name: "Blob", description: "A gelatinous creature that oozes everywhere.", img: "/img-placeholder.svg" },
  { name: "Slime", description: "A classic dungeon-dwelling slime.", img: "/img-placeholder.svg" },
  { name: "Goblin", description: "A mischievous little creature with a big mouth.", img: "/img-placeholder.svg" },
  { name: "Orc", description: "Strong and brutal, orcs love to fight.", img: "/img-placeholder.svg" },
  { name: "Skeleton", description: "An undead warrior risen from the grave.", img: "/img-placeholder.svg" },
  { name: "Zombie", description: "Slow, groaning, and always hungry for brains.", img: "/img-placeholder.svg" },
  { name: "Bat", description: "Flies in caves and attacks adventurers in the dark.", img: "/img-placeholder.svg" },
  { name: "Spider", description: "Lurks in webs and injects venom.", img: "/img-placeholder.svg" },
  { name: "Ghost", description: "Ethereal and hard to hit, but spooky as hell.", img: "/img-placeholder.svg" },
  { name: "Witch", description: "Casts dark spells from the shadows.", img: "/img-placeholder.svg" },
  { name: "Dragon", description: "A mighty beast that breathes fire and guards treasure.", img: "/img-placeholder.svg" },
  { name: "Imp", description: "Small, fiery, and always looking for mischief.", img: "/img-placeholder.svg" },
  { name: "Troll", description: "Big, dumb, and regenerates health quickly.", img: "/img-placeholder.svg" },
  { name: "Wraith", description: "Drains the life out of its enemies silently.", img: "/img-placeholder.svg" },
  { name: "Minotaur", description: "Half-bull, half-man — all rage.", img: "/img-placeholder.svg" },
  { name: "Harpy", description: "A screeching beast with wings and claws.", img: "/img-placeholder.svg" },
  { name: "Golem", description: "A magically animated stone guardian.", img: "/img-placeholder.svg" },
  { name: "Necromancer", description: "Raises the dead and commands them.", img: "/img-placeholder.svg" },
  { name: "Beholder", description: "A floating orb with many eyes and deadly powers.", img: "/img-placeholder.svg" }
   ];
   
}
