import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IUser, UsersService } from '../../services/users.service';
import { AdminTableService } from '../../services/adminTable.service';
import { CommonModule } from '@angular/common';
import { GradesService, IGrade } from '../../services/grades.service';
import { TableComponent } from '../table/table.component';
import { SharedService } from '../../services/shared.service';
import { AddModalComponent } from '../add-modal/add-modal.component';
import { SharedUsersService } from '../../services/sharedUsers.service';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, TableComponent, AddModalComponent],
  templateUrl: './usersList.component.html',
  styleUrl: './usersList.component.css',
})
export class UsersListComponent implements OnInit {
  users: IUser[] = this.usersService.users;
  addModal!: boolean;
  constructor(
    private usersService: UsersService,
    private headerTable: AdminTableService,
    private gradeService: GradesService,
    private sharedService: SharedService,
    private newUsers: SharedUsersService
  ) {
    this.sharedService.booleanData$.subscribe((data) => {
      this.isModal = data;
    });
    this.newUsers.users$.subscribe((data) => {
      this.users = data;
    });
  }
  searchItems: IUser[] = [];
  obj: boolean = true;
  arr: boolean = false;
  isModal: boolean = false;
  grades = this.gradeService.grades;
  grade!: IGrade;
  isGrade: boolean = true;
  tableHeaderItems: string[] = this.headerTable.titles;
  @Output() closeModal = new EventEmitter<boolean>();
  public closeUsersModal(e: Event) {
    this.closeModal.emit(this.isModal);
    e.preventDefault();
  }
  public addUser(e: Event) {
    e.preventDefault();
    this.addModal = true;
  }
  public onClosedModal(editModal: boolean) {
    this.addModal = editModal;
  }
  public newListOfUsers(e: Event, editModal: boolean) {
    e.preventDefault();
    this.addModal = editModal;
  }
  public onSearch(value: string) {
    this.searchItems = [];
    if (value !== '') {
      let isFound: boolean = false;
      this.users.forEach((user) => {
        if (
          user.name.includes(value) ||
          user.family.includes(value) ||
          user.city.includes(value) ||
          user.codeMeli.toString().includes(value) ||
          user.birthDay.includes(value)
        ) {
          isFound = true;
          this.searchItems.push(user);
        }
      });
      if (!isFound) {
        alert('موردی یافت نشد !!!');
      }
    }
  }
  public onMouseLeave(value: string) {
    if (value === '') this.searchItems = [];
  }
  ngOnInit(): void {}
}
