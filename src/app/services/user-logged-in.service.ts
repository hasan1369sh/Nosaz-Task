import { Injectable } from '@angular/core';
import { IUser } from './users.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserLoggedInService {
  userLoggedIn!: IUser;
  private user = new BehaviorSubject<IUser>(this.userLoggedIn);
  user$ = this.user.asObservable();
  sendLoggedInUsers(data: IUser) {
    this.user.next(data);
  }
}
