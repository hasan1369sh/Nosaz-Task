import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../services/users.service';
import { PersianTypeService } from '../../services/persian-type.service';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { UsersListComponent } from '../usersList/usersList.component';
import { SharedService } from '../../services/shared.service';
import { GradesService, IGrade } from '../../services/grades.service';
import { UserLoggedInService } from '../../services/user-logged-in.service';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css', '../show-grade/show-grade.component.css'],
  imports: [CommonModule, EditModalComponent, UsersListComponent],
})
export class UserComponent implements OnInit {
  usersModal: boolean = false;
  user: IUser | undefined;
  isAdmin: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private role: RoleService,
    private persianType: PersianTypeService,
    private sharedService: SharedService,
    private gradesService: GradesService,
    private loggedInUser: UserLoggedInService
  ) {
    this.sharedService.booleanData$.subscribe((data) => {
      this.usersModal = data;
    });
    this.loggedInUser.user$.subscribe((data) => {
      this.user = data;
    });
    this.role.booleanData$.subscribe((data) => {
      this.isAdmin = data;
    });
  }
  isTypeError1: boolean = false;
  isTypeError2: boolean = false;
  editModal: boolean = false;
  allowedChars = this.persianType.allowed_chars;
  isGrade!: boolean;
  grades: IGrade[] = this.gradesService.grades;
  grade!: IGrade;

  public showGrade() {
    let id = +this.route.snapshot.params['id'];
    let isGrade: boolean = false;
    let grade = this.grades.find((grade) => grade.fkStudentId === id);
    if (grade) {
      isGrade = true;
      this.grade = grade;
    }
    this.isGrade = isGrade;
    console.log(this.isGrade);
  }

  ngOnInit(): void {
    if (this.user?.username === 'admin' && this.user.password === 'admin') {
      this.isAdmin = true;
    }
  }
}
