import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Searchbar } from './component/searchbar/searchbar';
import { Bestiary } from "./component/bestiary/bestiary";
import { BestiaryShowBtn } from './component/bestiary-show-btn/bestiary-show-btn';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Searchbar, Bestiary, BestiaryShowBtn],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Neverday';

  inputString : string = "";

  onInputChange(value: string){
    this.inputString = value;
  }
}
