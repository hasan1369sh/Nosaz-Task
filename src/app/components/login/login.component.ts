import { Component, OnInit } from '@angular/core';
import { IUser, UsersService } from '../../services/users.service';
import { Router, RouterOutlet } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { CommonModule } from '@angular/common';
import { UserLoggedInService } from '../../services/user-logged-in.service';
import { SharedService2 } from '../../services/shared2.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [RouterOutlet, UserComponent, CommonModule],
})
export class LoginComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(
    private usersService: UsersService,
    private router: Router,
    private userLoggedIn: UserLoggedInService,
    private isLogin: SharedService2,
    private sharedService: SharedService
  ) {
    // this.isLogin.booleanData2$.subscribe((data) => {
    //   this.isLoggedIn = data;
    // });
    this.sharedService.booleanData$.subscribe((data) => {
      this.isLoggedIn = data;
    });
  }

  users: IUser[] = this.usersService.users;
  user!: IUser;
  public ngOnInit(): void {
    console.log(this.isLoggedIn);
  }

  public logIn(e: Event, username: string, password: string) {
    let u = this.users.find(
      (user) => user.username === username && user.password === password
    );
    if (u) {
      this.user = u;
      this.isLoggedIn = true;
      this.sendLoggedInUser();
      this.sendBooleanData2();
      this.router.navigate(['/login', this.user.id, this.user.username]);
    } else {
      this.router.navigate(['/not-found']);
    }
    e.preventDefault();
  }
  sendLoggedInUser() {
    const data = this.user;
    this.userLoggedIn.sendLoggedInUsers(data);
  }
  sendBooleanData2() {
    const data = true;
    this.isLogin.sendBooleanData2(data);
  }
}
