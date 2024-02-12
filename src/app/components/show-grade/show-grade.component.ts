import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { GradeTableService } from '../../services/gradeTable.Service';
import { GradesService, IGrade } from '../../services/grades.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser, UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';
import { UserLoggedInService } from '../../services/user-logged-in.service';
import { SharedService2 } from '../../services/shared2.service';
import { ICanComponentDeactivate } from '../../guards/deactive.guard';
import { Observable } from 'rxjs';
import { SharedUserService } from '../../services/sharedUser.service';

@Component({
  selector: 'app-show-grade',
  standalone: true,
  imports: [TableComponent, CommonModule],
  templateUrl: './show-grade.component.html',
  styleUrl: './show-grade.component.css',
})
export class ShowGradeComponent implements OnInit, ICanComponentDeactivate {
  user!: IUser;
  user2!: IUser;
  constructor(
    private headerTable: GradeTableService,
    private gradesService: GradesService,
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
    private sharedService2: SharedService2,
    private loggedInUser: UserLoggedInService,
    private newUser: SharedUserService
  ) {
    this.loggedInUser.user$.subscribe((data) => {
      this.user = data;
    });
    this.newUser.user$.subscribe((data) => {
      this.user2 = data;
    });
  }

  canDeactivate(): boolean | Promise<boolean> | Observable<boolean> {
    throw new Error('Method not implemented.');
  }
  // @ViewChild('generalMathematicsInput') generalMathematics!: ElementRef;
  // @ViewChild('physicsInput') physics!: ElementRef;
  // @ViewChild('circuitInput') circuit!: ElementRef;
  // @ViewChild('mechatronics') mechatronics!: ElementRef;
  // @ViewChild('farsiInput') farsi!: ElementRef;
  // @ViewChild('arabicInput') arabic!: ElementRef;

  // canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
  //   if (
  //     this.generalMathematics.nativeElement.value !== '' ||
  //     this.physics.nativeElement.value !== '' ||
  //     this.circuit.nativeElement.value !== '' ||
  //     this.mechatronics.nativeElement.value !== '' ||
  //     this.farsi.nativeElement.value !== '' ||
  //     this.arabic.nativeElement.value !== ''
  //   ) {
  //     return confirm('Do you want leave?');
  //   } else {
  //     return true;
  //   }
  // }

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
    this.router.navigate(['/login', this.user.id, this.user.username]);
  }
  public loadData() {
    if (this.user2) {
      let id = this.user2.id;
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
    } else if (this.user) {
      let id = this.user.id;
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
  }
  public showOrRegister() {
    let id = this.user2.id;
    let isGrade: boolean = false;
    this.grades.forEach((grade) => {
      if (grade.fkStudentId === id) {
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
