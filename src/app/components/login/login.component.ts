import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IUser, UsersService } from '../../services/users.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [RouterOutlet, UserComponent, CommonModule],
})
export class LoginComponent implements OnInit {
  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  isLoggedIn: boolean = false;
  users: IUser[] = this.usersService.users;
  public ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.isLoggedIn = params['isLogin'];
    });
  }

  public logIn(e: Event, username: string, password: string) {
    let u = this.users.find(
      (user) => user.username === username && user.password === password
    );
    if (u) {
      this.isLoggedIn = true;
      this.router.navigate(['/login', u.id, u.username], {
        queryParams: { isLogin: true },
      });
    } else {
      this.router.navigate(['/not-found']);
    }
    e.preventDefault();
  }
}
