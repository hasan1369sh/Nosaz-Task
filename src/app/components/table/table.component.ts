import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../services/users.service';
import { Router } from '@angular/router';
import { IGrade } from '../../services/grades.service';
import { SharedService2 } from '../../services/shared2.service';
import { SharedUserService } from '../../services/sharedUser.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: [
    './table.component.css',
    '../show-grade/show-grade.component.css',
  ],
})
export class TableComponent implements OnInit {
  isLogin!: boolean;
  constructor(
    private router: Router,
    private sharedService: SharedService2,
    private removeAddModal: SharedService2,
    private newUser: SharedUserService
  ) {
    this.sharedService.booleanData2$.subscribe((data) => {
      this.isLogin = data;
    });
  }
  @Input()
  grades!: IGrade[];
  @Input()
  isHidden!: boolean;
  @Input()
  users!: IUser[] | any[];
  @Input()
  tableHeaderItems!: string[];
  grade!: IGrade;
  isGrade: boolean = true;
  editBox: boolean = false;

  @Input() obj!: boolean;
  @Input() arr!: boolean;
  @Input() addGrade!: boolean;

  sendBooleanToAdmin() {
    const data = false;
    this.sharedService.sendBooleanData2(data);
  }
  sendBooleanData2() {
    const data = false;
    this.removeAddModal.sendBooleanData2(data);
  }
  sendNewUser(id: number) {
    const data = this.users.find((user) => user.id === id);
    this.newUser.sendNewUsers(data);
  }
  public showGrades(id: number, name: string) {
    this.sendNewUser(id);
    if (this.isLogin) {
      this.router.navigate(['/grade', id, name]);
    }
  }
  public editGrade() {
    this.editBox = true;
  }
  public saveNewGrade(
    generalMathematics: number,
    physics: number,
    circuit: number,
    mechatronics: number,
    farsi: number,
    arabic: number
  ) {
    let users: number[] = [
      generalMathematics,
      physics,
      circuit,
      mechatronics,
      farsi,
      arabic,
    ];

    this.users = users;
    this.editBox = false;
  }

  ngOnInit(): void {}
}
