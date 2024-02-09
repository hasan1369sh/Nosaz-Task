import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private booleanData = new BehaviorSubject<boolean>(false);
  booleanData$ = this.booleanData.asObservable();

  sendBooleanData(data: boolean) {
    this.booleanData.next(data);
  }
}
