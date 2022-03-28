import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Day } from '../models/day.model';

@Component({
  selector: 'app-day-details-form-md',
  templateUrl: './day-details-form-md.component.html',
  styleUrls: ['./day-details-form-md.component.css']
})
export class DayDetailsFormMDComponent implements OnInit {
  private _day?: Day

  constructor() { }

  ngOnInit(): void {
  }
  dayForm = new FormGroup({
    "sales": new FormControl(this._day?.sales),
    "orders": new FormControl(this._day?.orders),
    "items": new FormControl(this._day?.items),
    "customers": new FormControl(this._day?.customers)

  });
  @Input()
  public set day(value: Day) {
    this._day = value;
    if (this._day != undefined) {
      this.dayForm = new FormGroup({
        "sales": new FormControl(this._day.sales),
        "orders": new FormControl(this._day.orders),
        "items": new FormControl(this._day.items),
        "customers": new FormControl(this._day.customers)
      });
    }
  };

  @Output() onSaveDay: EventEmitter<string> = new EventEmitter();
  saveNewDay() {
    if (this._day != undefined) {
      this._day.sales = this.dayForm.value.sales;
      this._day.orders = this.dayForm.value.orders;
      this._day.items = this.dayForm.value.items;
      this._day.customers = this.dayForm.value.customers;
    }
  }
}
