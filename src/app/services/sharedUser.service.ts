import { Injectable } from '@angular/core';
import { IUser } from './users.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedUserService {
  constructor() {}
  private myUser!: IUser;
  private user = new BehaviorSubject<IUser>(this.myUser);
  user$ = this.user.asObservable();
  sendNewUsers(data: IUser) {
    this.user.next(data);
  }
}
