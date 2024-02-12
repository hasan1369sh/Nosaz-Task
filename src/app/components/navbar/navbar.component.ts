import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SharedService2 } from '../../services/shared2.service';
import { UserLoggedInService } from '../../services/user-logged-in.service';
import { IUser, UsersService } from '../../services/users.service';
import { IsLoggedInService } from '../../services/is-logged-in.service';
import { RoleService } from '../../services/role.service';
import { SharedService } from '../../services/shared.service';
import { GradesService, IGrade } from '../../services/grades.service';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { UsersListComponent } from '../usersList/usersList.component';
import { SharedUserService } from '../../services/sharedUser.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterModule,
    CommonModule,
    LoginComponent,
    EditModalComponent,
    UsersListComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: [
    './navbar.component.css',
    '../show-grade/show-grade.component.css',
  ],
})
export class NavbarComponent implements OnInit {
  usersModal: boolean = false;
  isLoggedIn: boolean = false;
  user!: IUser;
  isAdmin: boolean = false;
  isGrade!: boolean;
  editModal: boolean = false;
  constructor(
    private sharedService2: SharedService2,
    private sharedService: SharedService,
    private router: Router,
    private loggedInUser: UserLoggedInService,
    private isLog: IsLoggedInService,
    private role: RoleService,
    private gradesService: GradesService,
    private newUser: SharedUserService,
    private usersService: UsersService
  ) {
    this.sharedService2.booleanData2$.subscribe((data) => {
      this.isLoggedIn = data;
    });
    this.loggedInUser.user$.subscribe((data) => {
      this.user = data;
    });
    this.role.booleanData$.subscribe((data) => {
      this.isAdmin = data;
    });
  }
  users: IUser[] = this.usersService.users;
  public onEdit(e: Event) {
    e.preventDefault();
    this.editModal = true;
  }
  public onClosedModal(editModal: boolean) {
    this.editModal = editModal;
  }
  public onClosedUsersModal(isModal: boolean) {
    this.usersModal = isModal;
  }

  grades: IGrade[] = this.gradesService.grades;
  grade!: IGrade;
  public usersList() {
    this.router.navigate(['/users']);
  }
  public gradeHandler() {
    this.router.navigate(['/grade', this.user.id, this.user.name]);
    this.sendNewUser(this.user.id);
  }

  public logOutHandler() {
    this.isLog.logout();
    this.isLoggedIn = this.isLog.isLoggedInFunction();
    this.isAdmin = this.isLog.isLoggedInFunction();
    this.router.navigate(['/']);
    this.sendBooleanData();
  }
  sendBooleanData() {
    const data = false;
    this.sharedService.sendBooleanData(data);
  }
  sendNewUser(id: number) {
    const data = this.users.find((user) => user.id === id);
    if (data) {
      this.newUser.sendNewUsers(data);
    }
  }

  ngOnInit() {}
}
