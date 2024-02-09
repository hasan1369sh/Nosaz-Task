import { Injectable } from '@angular/core';
import { IUser, UsersService } from './users.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedUsersService {
  constructor(private usersService: UsersService) {}
  private users = new BehaviorSubject<IUser[]>(this.usersService.users);
  users$ = this.users.asObservable();
  sendNewUsers(data: IUser[]) {
    this.users.next(data);
  }
}
