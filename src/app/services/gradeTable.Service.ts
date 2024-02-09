import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GradeTableService {
  title: string[] = [
    'ریاضیات عمومی',
    'فیزیک',
    'جریان',
    'مکاترونیک',
    'فارسی',
    'عربی',
    ' ',
  ];
}
