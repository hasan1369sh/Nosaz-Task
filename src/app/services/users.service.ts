import { Injectable } from '@angular/core';

export interface IUser {
  id: number;
  name: string;
  family: string;
  birthDay: string;
  city: string;
  role: string;
  codeMeli: number;
  username: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}
  users: IUser[] = [
    {
      id: 1,
      name: 'نوشین',
      family: 'نامور',
      birthDay: '1330/12/05',
      city: 'اصفهان',
      role: 'student',
      codeMeli: 4000011006,
      username: 'Noshin1330',
      password: 'Noshin1330',
    },
    {
      id: 2,
      name: 'پرند',
      family: 'میزبانی',
      birthDay: '1381/04/20',
      city: 'اصفهان',
      role: 'student',
      codeMeli: 2805156821,
      username: 'Parand1381',
      password: 'Parand1381',
    },
    {
      id: 3,
      name: 'مهرنگار',
      family: 'معین',
      birthDay: '1374/10/10',
      city: 'اصفهان',
      role: 'student',
      codeMeli: 3314312172,
      username: 'Mehri1234',
      password: 'Mehri1234',
    },
    {
      id: 4,
      name: 'کاساندان',
      family: 'امانی',
      birthDay: '1376/06/15',
      city: 'اصفهان',
      role: 'student',
      codeMeli: 3577675152,
      username: '54223',
      password: '54223',
    },
    {
      id: 5,
      name: 'لادن',
      family: 'پیران',
      birthDay: '1387/11/31',
      city: 'اصفهان',
      role: 'student',
      codeMeli: 9337946785,
      username: 'Ladan1387',
      password: 'Ladan1387',
    },
    {
      id: 6,
      name: 'ماهوش',
      family: 'صانعی',
      birthDay: '1365/03/25',
      city: 'اصفهان',
      role: 'student',
      codeMeli: 5964778046,
      username: 'Mahush1365',
      password: 'Mahush1365',
    },
    {
      id: 7,
      name: 'ایرسا',
      family: 'توکل',
      birthDay: '1374/02/09',
      city: 'اصفهان',
      role: 'student',
      codeMeli: 8736729371,
      username: 'irsa1374',
      password: 'irsa1374',
    },
    {
      id: 8,
      name: 'انوش',
      family: 'پازارگاد',
      birthDay: '1379/08/30',
      city: 'اصفهان',
      role: 'student',
      codeMeli: 1066643296,
      username: 'anush1379',
      password: 'anush1379',
    },
    {
      id: 9,
      name: 'دادبه',
      family: 'بحرینی',
      birthDay: '1345/04/01',
      city: 'اصفهان',
      role: 'admin',
      codeMeli: 3591538825,
      username: 'admin',
      password: 'admin',
    },
  ];
}
