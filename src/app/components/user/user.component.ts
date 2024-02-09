import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser, UsersService } from '../../services/users.service';
import { PersianTypeService } from '../../services/persian-type.service';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { UsersListComponent } from '../usersList/usersList.component';
import { SharedService } from '../../services/shared.service';
import { GradesService, IGrade } from '../../services/grades.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css', '../show-grade/show-grade.component.css'],
  imports: [CommonModule, EditModalComponent, UsersListComponent],
})
export class UserComponent implements OnInit {
  usersModal: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private persianType: PersianTypeService,
    private sharedService: SharedService,
    private gradesService: GradesService
  ) {
    this.sharedService.booleanData$.subscribe((data) => {
      this.usersModal = data;
    });
  }
  isTypeError1: boolean = false;
  isTypeError2: boolean = false;
  user: IUser | undefined;
  editModal: boolean = false;
  allowedChars = this.persianType.allowed_chars;
  isAdmin: boolean = false;
  isGrade!: boolean;
  grades: IGrade[] = this.gradesService.grades;
  grade!: IGrade;

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
  public usersList() {
    this.usersModal = true;
  }
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
    let username = this.route.snapshot.params['username'];
    if (username === 'admin') {
      this.isAdmin = true;
    }
    this.user = this.usersService.users.find(
      (user) => user.username === username
    );
  }
}
