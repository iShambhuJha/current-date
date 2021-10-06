import { Component, OnInit } from '@angular/core';
enum WeekDay {
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 0,
}
@Component({
  selector: 'app-week-day',
  templateUrl: './week-day.component.html',
  styleUrls: ['./week-day.component.css'],
})
export class WeekDayComponent implements OnInit {
  weekDay = WeekDay;
  // public days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  date: Date;

  constructor() {}

  ngOnInit(): void {
    this.date = new Date();
  }
  days(): Array<string> {
    var keys = Object.keys(this.weekDay);
    console.log(keys,'kkkk')
    return keys.slice(keys.length / 2);
  }
}
