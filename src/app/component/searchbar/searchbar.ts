import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'searchbar',
  imports: [],
  templateUrl: './searchbar.html',
  styleUrl: './searchbar.css'
})
export class Searchbar {
@Output('inputString') inputString  = new EventEmitter<string>();

  onInputChange(ev: Event){
    const input = ev.target as HTMLInputElement;
    this.inputString.emit(input.value);
  }
}
