import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BestiaryService {
  private isBestiaryShownSource = new BehaviorSubject<boolean>(false);
  isBestiaryShown$ = this.isBestiaryShownSource.asObservable();

  toggleBestiary() {
    this.isBestiaryShownSource.next(!this.isBestiaryShownSource.value);
  }
}
