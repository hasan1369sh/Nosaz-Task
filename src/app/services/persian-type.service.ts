import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersianTypeService {
  constructor() {}
  allowed_chars: string[] = [
    '',
    ' ',
    'آ',
    'ا',
    'ب',
    'پ',
    'ت',
    'ث',
    'ج',
    'چ',
    'ح',
    'خ',
    'د',
    'ذ',
    'ر',
    'ز',
    'ژ',
    'س',
    'ش',
    'ص',
    'ض',
    'ط',
    'ظ',
    'ع',
    'غ',
    'ف',
    'ق',
    'ک',
    'گ',
    'ل',
    'م',
    'ن',
    'و',
    'ه',
    'ی',
    'ي',
    'ك',
    'ة',
  ];
}
