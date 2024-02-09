import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminTableService {
  titles: string[] = [
    'نام',
    'نام خانوادگی',
    'کد ملی',
    'تاریخ تولد',
    'شهر',
    'نمرات',
  ];
}
