import { Injectable } from '@angular/core';
import { UserLoggedInService } from './user-logged-in.service';
import { IUser } from './users.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  user!: IUser;
  private booleanData = new BehaviorSubject<boolean>(false);
  booleanData$ = this.booleanData.asObservable();

  constructor(private userLoggedIn: UserLoggedInService) {
    this.userLoggedIn.user$.subscribe((data) => {
      this.user = data;
      this.booleanData.next(this.isAdmin());
    });
  }

  isAdmin(): boolean {
    return this.user.username === 'admin' && this.user.password === 'admin';
  }

  sendBooleanData(data: boolean) {
    this.booleanData.next(data);
  }
}
