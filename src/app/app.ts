import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Searchbar } from './component/searchbar/searchbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Searchbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular20';
}
