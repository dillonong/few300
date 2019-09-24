import { Component, OnInit } from '@angular/core';
import { GiftGivingState, selectHolidayListItems, seleectHolidaysLoaded } from '../../reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HolidayListItem } from '../../models';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements OnInit {

  holidaysLoaded$: Observable<boolean>;
  holidays$: Observable<HolidayListItem[]>;

  constructor(private store: Store<GiftGivingState>) { }

  ngOnInit() {
    this.holidays$ = this.store.select(selectHolidayListItems);
    this.holidaysLoaded$ = this.store.select(seleectHolidaysLoaded); // -- loads from the reducer selector
  }

}
