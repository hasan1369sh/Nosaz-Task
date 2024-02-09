import { Injectable } from '@angular/core';
export interface IGrade {
  id: number;
  generalMathematics: number;
  physics: number;
  circuit: number;
  mechatronics: number;
  farsi: number;
  arabic: number;
  fkStudentId: number;
}
@Injectable({
  providedIn: 'root',
})
export class GradesService {
  constructor() {}
  grades: IGrade[] = [
    {
      generalMathematics: 12.5,
      physics: 14.75,
      circuit: 20,
      mechatronics: 13.9,
      farsi: 10,
      arabic: 9.5,
      fkStudentId: 3,
      id: 1,
    },
    {
      generalMathematics: 16.5,
      physics: 19,
      circuit: 14.5,
      mechatronics: 15,
      farsi: 9,
      arabic: 13,
      fkStudentId: 4,
      id: 2,
    },
  ];
}
