import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IsLoggedInService {
  isLoggedIn: boolean = false;

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  isLoggedInFunction(): boolean {
    return this.isLoggedIn;
  }
}
