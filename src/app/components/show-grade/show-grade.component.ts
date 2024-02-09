import { Component, Input, OnInit } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { GradeTableService } from '../../services/gradeTable.Service';
import { GradesService, IGrade } from '../../services/grades.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser, UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-grade',
  standalone: true,
  imports: [TableComponent, CommonModule],
  templateUrl: './show-grade.component.html',
  styleUrl: './show-grade.component.css',
})
export class ShowGradeComponent implements OnInit {
  constructor(
    private headerTable: GradeTableService,
    private gradesService: GradesService,
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) {}

  tableHeaderItems: string[] = this.headerTable.title;
  grades = this.gradesService.grades;
  users: IUser[] = this.usersService.users;
  newUsers: number[] = [];
  isHidden: boolean = true;
  obj: boolean = false;
  arr: boolean = true;
  isGrade: boolean = true;
  isValid: boolean = true;
  public onBack(e: Event) {
    e.preventDefault();
    this.router.navigate(['/login', 9, 'admin'], {
      queryParams: { isLogin: true },
    });
  }
  public loadData() {
    let id = +this.route.snapshot.params['id'];
    for (let i = 0; i < this.grades.length; i++) {
      if (id === this.grades[i].fkStudentId) {
        this.newUsers.push(this.grades[i].generalMathematics);
        this.newUsers.push(this.grades[i].physics);
        this.newUsers.push(this.grades[i].circuit);
        this.newUsers.push(this.grades[i].mechatronics);
        this.newUsers.push(this.grades[i].farsi);
        this.newUsers.push(this.grades[i].arabic);
      }
    }
  }
  public showOrRegister() {
    let id = +this.route.snapshot.params['id'];
    let isGrade: boolean = false;
    this.grades.forEach((grade) => {
      if (grade.fkStudentId === id) {
        console.log(grade.fkStudentId);
        isGrade = true;
        return;
      }
    });
    this.isGrade = isGrade;
  }
  public validationNumber(e: string) {
    var val = +e;
    let valid = false;
    if (val < 0 || val > 20) {
      this.isValid = valid;
    }
    console.log(this.isValid);
  }
  public saveGrade(
    e: Event,
    generalMathematics: number,
    physics: number,
    circuit: number,
    mechatronics: number,
    farsi: number,
    arabic: number
  ) {
    e.preventDefault();
    if (
      generalMathematics > 20 ||
      generalMathematics < 0 ||
      physics > 20 ||
      physics < 0 ||
      mechatronics > 20 ||
      mechatronics < 0 ||
      farsi > 20 ||
      farsi < 0 ||
      arabic > 20 ||
      arabic < 0 ||
      circuit > 20 ||
      circuit < 0
    ) {
      alert('نمرات وارد شده باید بین 0 و 20 باشند');
    } else {
      let myGrade: IGrade = {
        id: 0,
        generalMathematics: 0,
        physics: 0,
        circuit: 0,
        mechatronics: 0,
        farsi: 0,
        arabic: 0,
        fkStudentId: 0,
      };
      let id = +this.route.snapshot.params['id'];
      myGrade.id = this.grades.length + 1;
      myGrade.fkStudentId = id;
      myGrade.arabic = arabic;
      myGrade.circuit = circuit;
      myGrade.farsi = farsi;
      myGrade.mechatronics = mechatronics;
      myGrade.generalMathematics = generalMathematics;
      myGrade.physics = physics;
      this.grades.push(myGrade);
      this.router.navigate(['/login', 9, 'admin'], {
        queryParams: { isLogin: true },
      });
    }
  }
  ngOnInit(): void {
    this.loadData();
    this.showOrRegister();
  }
}
