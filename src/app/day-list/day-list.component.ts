import { Component, OnInit } from '@angular/core';
import { Day } from '../models/day.model';
import { DayService } from '../day.service';

@Component({
  selector: 'app-day-list',
  templateUrl: './day-list.component.html',
})
export class DayListComponent implements OnInit {
  constructor(private _dayService: DayService) {
    this._dayService.getdayFromServer().subscribe(data => {
      Object.entries(data).forEach(([key, value]) => {
        if (key == 'sales') {
          Object.entries(value).forEach(([k, v]) => {
            this.days.set(k, v);
          })
        }
      });
    })
  }

  days = new Map<string, Day>();
  sort(daysValue: Map<string, any>) {
    var items = Object.keys(daysValue).map(function(key) {
      return [key, daysValue.get(key)];
    });
    
    // Sort the array based on the second element
    items.sort(function(first, second) {
      return second[1].sales - first[1].sales;
    });
  }

  delete(itemKey: string) {
    this.days.delete(itemKey)
  }

  selectedDay?: Day
  edit(itemKey: string) {
    this.selectedDay = this.days.get(itemKey)
  }
  flags: boolean = false;


  biggestRange(daysValue: Map<string, Day>) {
    var arrayDayes: Day[] = [];
    daysValue.forEach((i) => {
      arrayDayes.push(i)
    })
    let max = 0
    let min = 0

    for (let i = 0; i < arrayDayes.length; i++) {
      let rangMax = 0
      var rangMin = 0;
      let flag = true
      let flagMin = true
      for (let j = i; j < arrayDayes.length - 1; j++) {
        if (arrayDayes[j].sales != undefined && arrayDayes[j + 1].sales != undefined) {
          var a = arrayDayes[j].sales
          var b = arrayDayes[j + 1].sales
          if (Number(a) < Number(b)) {
            if (flag == true)
              rangMax++;
            else
              break
          }
          else {
            flag = false
          }
          if (Number(a) > Number(b)) {
            if (flagMin == true)
              rangMin++
            else
              break
          }
          else {
            flagMin = false
          }
        }
      }
      if (rangMax > max) {
        max = rangMax
        rangMax = 0
      }
      if (rangMin > min) {
        min = rangMin
        rangMin = 0
      }
    }

    if (max > min) {
      alert("הטווח הגדול ביותר של עליית מכירות הוא ," + max)
    }
    else {
      alert("הטווח הגדול ביותר של ירידת מכירות הוא ," + min)
    }
  }
  flag() {
    if (!this.flags)
      this.flags = true;
    else
      this.flags = false;
  }
  saveDay(dayToAddIndex: string, dayToAdd: Day) {
    this.days.set(dayToAddIndex, dayToAdd);
  }
  ngOnInit(): void {
  }
}

