import { Component, Input, OnInit, Output } from '@angular/core';
import { IUser, UsersService } from '../../services/users.service';
import { PersianTypeService } from '../../services/persian-type.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-modal',
  standalone: true,
  imports: [CommonModule, NgPersianDatepickerModule, ReactiveFormsModule],
  templateUrl: './edit-modal.component.html',
  styleUrl: './edit-modal.component.css',
})
export class EditModalComponent implements OnInit {
  constructor(private persianType: PersianTypeService) {}
  isTypeError1: boolean = false;
  isTypeError2: boolean = false;
  @Input() user!: IUser;
  editModal: boolean = false;
  @Output() closeClicked = new EventEmitter<boolean>();
  allowedChars = this.persianType.allowed_chars;

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
    if (this.user !== undefined) {
      this.user.name = name;
      this.user.family = family;
      this.user.birthDay = birthday;
      this.user.city = city;
      this.user.codeMeli = codeMeli;
      this.user.username = username;
      this.user.password = password;
    }
    if (!this.isTypeError1 && !this.isTypeError2) {
      this.closeClicked.emit(this.editModal);
    }
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
  public closeModal(e: Event) {
    e.preventDefault();
    this.closeClicked.emit(this.editModal);
  }
  ngOnInit(): void {}
}
