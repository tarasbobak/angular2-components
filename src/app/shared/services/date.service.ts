import { Inject, Injectable } from '@angular/core';

@Injectable()
export class DateService {
  private MONTH_NAMES: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  public getMonthName(date: Date): string {
    const monthIndex: number = new Date(date).getMonth();

    return this.MONTH_NAMES[monthIndex];
  }

  public getDateFromString(dateString: string) {
    const datePartsArr = dateString.split('-');
    const day: number = parseInt(datePartsArr[0], 10);
    const month: number = parseInt(datePartsArr[1], 10);
    const year: number = parseInt(datePartsArr[2], 10);

    return new Date(year, month - 1 , day).toString();
  }
}
