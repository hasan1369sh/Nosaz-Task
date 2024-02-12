import { Component, OnInit, Output } from '@angular/core';
import { IUser, UsersService } from '../../services/users.service';
import { PersianTypeService } from '../../services/persian-type.service';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { SharedUsersService } from '../../services/sharedUsers.service';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-modal',
  standalone: true,
  imports: [CommonModule, NgPersianDatepickerModule, ReactiveFormsModule],
  templateUrl: './add-modal.component.html',
  styleUrl: '../edit-modal/edit-modal.component.css',
})
export class AddModalComponent implements OnInit {
  dataValue = new FormControl();
  constructor(
    private persianType: PersianTypeService,
    private usersService: UsersService,
    private newUsers: SharedUsersService
  ) {}
  isTypeError1: boolean = false;
  isTypeError2: boolean = false;
  allowedChars = this.persianType.allowed_chars;
  isValid: boolean = true;
  addModal: boolean = false;
  @Output() closeClicked = new EventEmitter<boolean>();
  users = this.usersService.users;
  public saveChange(
    e: Event,
    name: string,
    family: string,
    birthday: string,
    city: string,
    codeMeli: number,
    username: string,
    password: string
  ) {
    e.preventDefault();
    let newUser: IUser = {
      id: this.users.length + 1,
      name: name,
      family: family,
      birthDay: birthday,
      city: city,
      role: 'user',
      codeMeli: codeMeli,
      username: username,
      password: password,
    };

    if (!this.isTypeError1 && !this.isTypeError2 && this.isValid) {
      this.closeClicked.emit(this.addModal);
    }
    this.users.push(newUser);
    this.sendNewUsers();
  }
  sendNewUsers() {
    const data = this.users;
    this.newUsers.sendNewUsers(data);
  }

  public persianHandler1(textInput: HTMLInputElement) {
    let text: string[] = textInput.value.split('');
    for (let i = 0; i < text.length; i++) {
      if (!this.allowedChars.includes(text[i])) {
        this.isTypeError1 = true;
      } else {
        this.isTypeError1 = false;
      }
    }
  }
  public persianHandler2(textInput: HTMLInputElement) {
    let text: string[] = textInput.value.split('');
    for (let i = 0; i < text.length; i++) {
      if (!this.allowedChars.includes(text[i])) {
        this.isTypeError2 = true;
      } else {
        this.isTypeError2 = false;
      }
    }
  }
  public isValidIranianNationalCode(textInput: HTMLInputElement) {
    const value = textInput.value;
    if (!/^\d{10}$/.test(value)) this.isValid = false;
    false;
    const check = parseInt(value[9], 10);
    const sum =
      Array.from(value.substring(0, 9))
        .map((num, index) => parseInt(num, 10) * (10 - index))
        .reduce((acc, x) => acc + x) % 11;
    let isValid = (sum < 2 && check == sum) || (sum >= 2 && check + sum == 11);
    this.isValid = isValid;
  }
  public closeModal(e: Event) {
    e.preventDefault();
    this.closeClicked.emit(this.addModal);
  }
  ngOnInit(): void {}
}
