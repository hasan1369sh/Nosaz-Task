import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../services/users.service';
import { Router } from '@angular/router';
import { IGrade } from '../../services/grades.service';
import { SharedService } from '../../services/shared.service';

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
  constructor(private router: Router, private sharedService: SharedService) {}
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
    this.sharedService.sendBooleanData(data);
  }
  public showGrades(id: number, name: string) {
    this.router.navigate(['/grade', id, name], {
      queryParams: { isLogin: true },
    });
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
