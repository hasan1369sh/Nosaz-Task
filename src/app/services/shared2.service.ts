import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService2 {
  private booleanData2 = new BehaviorSubject<boolean>(false);
  booleanData2$ = this.booleanData2.asObservable();

  sendBooleanData2(data: boolean) {
    this.booleanData2.next(data);
  }
}
